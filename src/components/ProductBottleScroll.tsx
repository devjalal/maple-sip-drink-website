'use client';

import { useEffect, useRef, useMemo } from 'react';
import { useScroll, useTransform, useSpring } from 'framer-motion';
import { useIsMobile } from '@/hooks/useIsMobile';

interface Props {
  folderPath: string;
  frameCount: number;
}

export default function ProductBottleScroll({ folderPath, frameCount }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastWidth = useRef(0);
  const isMobile = useIsMobile();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Smooth the scroll progress to prevent jitter on mobile
  // On mobile, use a more responsive spring (higher stiffness, less damping) to reduce perceived lag
  const smoothScrollY = useSpring(scrollYProgress, {
    stiffness: isMobile ? 300 : 100,
    damping: isMobile ? 40 : 30,
    restDelta: 0.001
  });

  const currentFrame = useTransform(smoothScrollY, [0, 1], [1, frameCount]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d', { alpha: false }); // Optimization: no alpha needed for JPGs
    if (!context) return;

    // Load images
    const images: HTMLImageElement[] = [];
    let loadedImages = 0;

    // Preload important frames first (first, middle, last)
    const priorityFrames = [1, Math.floor(frameCount / 2), frameCount];
    
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const paddedIndex = i.toString().padStart(3, '0');
      img.src = `${folderPath}/ezgif-frame-${paddedIndex}.jpg`;
      
      if (priorityFrames.includes(i)) {
        img.decode().then(() => {
          images[i - 1] = img;
          loadedImages++;
          if (i === 1) drawFrame(img);
        }).catch(() => {
          images[i - 1] = img;
        });
      } else {
        images.push(img);
        img.onload = () => {
          loadedImages++;
          if (loadedImages === 1) drawFrame(img);
        };
      }
    }

    const drawFrame = (img: HTMLImageElement) => {
      if (!img || !img.complete) return;
      
      const dpr = window.devicePixelRatio || 1;
      const canvasWidth = canvas.width / dpr;
      const canvasHeight = canvas.height / dpr;
      
      context.clearRect(0, 0, canvas.width, canvas.height);
      
      const canvasRatio = canvasWidth / canvasHeight;
      const imgRatio = img.width / img.height;
      
      let drawWidth, drawHeight;
      if (canvasRatio > imgRatio) {
        drawHeight = canvasHeight;
        drawWidth = img.width * (canvasHeight / img.height);
      } else {
        drawWidth = canvasWidth;
        drawHeight = img.height * (canvasWidth / img.width);
      }
      
      const offsetX = (canvasWidth - drawWidth) / 2;
      const offsetY = (canvasHeight - drawHeight) / 2;
      
      context.save();
      context.scale(dpr, dpr);
      // Black background
      context.fillStyle = '#000000';
      context.fillRect(0, 0, canvasWidth, canvasHeight);
      context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      context.restore();
    };

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // On mobile, height changes frequently due to URL bar. 
      // Only resize if width changes or height changes significantly (> 100px)
      const heightDiff = Math.abs(height - (canvas.height / (window.devicePixelRatio || 1)));
      if (width === lastWidth.current && heightDiff < 100) return;
      
      lastWidth.current = width;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      const current = Math.round(currentFrame.get());
      const img = images[current - 1];
      if (img && img.complete) {
        drawFrame(img);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    let animationFrameId: number;
    const unsubscribe = currentFrame.on('change', (latest) => {
      const index = Math.min(frameCount - 1, Math.max(0, Math.round(latest) - 1));
      const img = images[index];
      if (img && img.complete) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(() => drawFrame(img));
      }
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      unsubscribe();
      cancelAnimationFrame(animationFrameId);
    };
  }, [currentFrame, folderPath, frameCount]);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-black" style={{ transform: 'translateZ(0)' }}>
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden will-change-transform">
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full object-cover" 
          style={{ touchAction: 'none', willChange: 'transform' }}
        />
      </div>
    </div>
  );
}
