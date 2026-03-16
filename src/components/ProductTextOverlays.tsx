'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Product } from '@/data/products';
import { ChevronDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/useIsMobile';

interface Props {
  product: Product;
}

export default function ProductTextOverlays({ product }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Calculate opacities for different sections based on scroll
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.25], [0, 1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.5], [0, 1, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.75], [0, 1, 1, 0]);
  const opacity4 = useTransform(scrollYProgress, [0.75, 0.85, 0.95, 1], [0, 1, 1, 0]);

  // Minor vertical movements for parallax - disabled on mobile
  const y1 = useTransform(scrollYProgress, [0, 0.25], isMobile ? [0, 0] : [50, -50]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.5], isMobile ? [0, 0] : [50, -50]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.75], isMobile ? [0, 0] : [50, -50]);
  const y4 = useTransform(scrollYProgress, [0.75, 1], isMobile ? [0, 0] : [50, -50]);

  // Scroll indicator opacity
  const scrollArrowOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  return (
    <div ref={containerRef} className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center pointer-events-none">
        
        {/* Section 1 */}
        <motion.div style={{ opacity: opacity1, y: y1 }} className="absolute text-center px-4 w-full flex flex-col items-center">
          <h2 className="text-5xl md:text-8xl font-bold text-white mb-4 tracking-tight drop-shadow-2xl">
            {product.section1.title}
          </h2>
          <p className="text-xl md:text-3xl text-gray-200 mt-2 max-w-2xl font-light">
            {product.section1.subtitle}
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div style={{ opacity: opacity2, y: y2 }} className="absolute text-center px-4 w-full flex flex-col items-center">
          <h2 className="text-5xl md:text-8xl font-bold text-white mb-4 tracking-tight drop-shadow-2xl">
            {product.section2.title}
          </h2>
          <p className="text-xl md:text-3xl text-gray-200 mt-2 max-w-2xl font-light">
            {product.section2.subtitle}
          </p>
        </motion.div>

        {/* Section 3 */}
        <motion.div style={{ opacity: opacity3, y: y3 }} className="absolute text-center px-4 w-full flex flex-col items-center">
          <h2 className="text-5xl md:text-8xl font-bold text-white mb-4 tracking-tight drop-shadow-2xl">
            {product.section3.title}
          </h2>
          <p className="text-xl md:text-3xl text-gray-200 mt-2 max-w-2xl font-light">
            {product.section3.subtitle}
          </p>
        </motion.div>

        {/* Section 4 */}
        <motion.div style={{ opacity: opacity4, y: y4 }} className="absolute text-center px-4 w-full flex flex-col items-center">
          <h2 className="text-5xl md:text-8xl font-bold text-white mb-4 tracking-tight drop-shadow-2xl">
            {product.section4.title}
          </h2>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          style={{ opacity: scrollArrowOpacity }} 
          className="absolute bottom-28 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-white/80 text-[12px] tracking-[0.4em] uppercase font-black drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">Scroll to discover</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          >
            <ChevronDown className="text-white w-5 h-5" />
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}
