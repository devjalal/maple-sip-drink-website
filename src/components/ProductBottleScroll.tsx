'use client';

import { useEffect, useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';

interface Props {
  folderPath: string;
  frameCount: number;
}

export default function ProductBottleScroll({ folderPath, frameCount }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const currentFrame = useTransform(scrollYProgress, [0, 1], [1, frameCount]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    // Load images
    const images: HTMLImageElement[] = [];
    let loadedImages = 0;

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const paddedIndex = i.toString().padStart(3, '0');
      img.src = `${folderPath}/ezgif-frame-${paddedIndex}.jpg`;
      images.push(img);
      img.onload = () => {
        loadedImages++;
        if (loadedImages === 1) {
          drawFrame(images[0]);
        }
      };
    }

    const drawFrame = (img: HTMLImageElement) => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      
      const canvasRatio = canvas.width / canvas.height;
      const imgRatio = img.width / img.height;
      
      let drawWidth, drawHeight;
      if (canvasRatio > imgRatio) {
        drawHeight = canvas.height;
        drawWidth = img.width * (canvas.height / img.height);
      } else {
        drawWidth = canvas.width;
        drawHeight = img.height * (canvas.width / img.width);
      }
      
      const offsetX = (canvas.width - drawWidth) / 2;
      const offsetY = (canvas.height - drawHeight) / 2;
      
      // Black background for the canvas itself since the source is jpg
      context.fillStyle = '#000000';
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const current = Math.round(currentFrame.get());
      if (images[current - 1] && images[current - 1].complete) {
        drawFrame(images[current - 1]);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    const unsubscribe = currentFrame.on('change', (latest) => {
      const index = Math.min(frameCount - 1, Math.max(0, Math.round(latest) - 1));
      const img = images[index];
      if (img && img.complete) {
        requestAnimationFrame(() => drawFrame(img));
      }
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      unsubscribe();
    };
  }, [currentFrame, folderPath, frameCount]);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-black">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover" />
      </div>
    </div>
  );
}
