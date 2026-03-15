'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { products } from '@/data/products';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductBottleScroll from '@/components/ProductBottleScroll';
import ProductTextOverlays from '@/components/ProductTextOverlays';
import { ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const activeProduct = products[currentIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <main className="bg-black min-h-screen text-white selection:bg-pink-500 selection:text-white" style={{ backgroundColor: '#000' }}>
      <Navbar />

      {/* 1. Hero Scroll Experience */}
      <section className="relative w-full">
        <ProductBottleScroll folderPath={activeProduct.folderPath} frameCount={activeProduct.frameCount} />
        <ProductTextOverlays product={activeProduct} />
      </section>

      {/* 2. Product Details Section */}
      <section className="relative py-32 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-transparent bg-clip-text" style={{ backgroundImage: activeProduct.gradient }}>
            {activeProduct.detailsSection.title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
            {activeProduct.detailsSection.description}
          </p>
        </motion.div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {activeProduct.stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm shadow-2xl"
            >
              <div className="text-4xl font-bold mb-2" style={{ color: activeProduct.themeColor }}>{stat.val}</div>
              <div className="text-gray-400 font-medium tracking-wide uppercase text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Freshness Section */}
      <section className="relative py-32 bg-zinc-950 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              {activeProduct.freshnessSection.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              {activeProduct.freshnessSection.description}
            </p>
            <ul className="mt-8 space-y-4">
              {activeProduct.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-200">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: activeProduct.themeColor }} />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 w-full aspect-square rounded-[3rem] overflow-hidden relative shadow-2xl"
            style={{ background: activeProduct.gradient }}
          >
            {/* Visual placeholder for the freshness abstract imagery */}
            <div className="absolute inset-0 bg-black/20 mix-blend-overlay" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/40 text-8xl font-black rotate-[-15deg] tracking-tighter">
                {activeProduct.name.split(' ')[1]?.toUpperCase() || activeProduct.name.toUpperCase()}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Buy Now Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-[3rem] p-12 md:p-20 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 opacity-20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" style={{ background: activeProduct.gradient }} />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <span className="text-pink-500 font-semibold tracking-widest uppercase text-sm mb-4 block">
              Experience {activeProduct.name}
            </span>
            <div className="text-6xl md:text-8xl font-bold text-white mb-2">
              {activeProduct.buyNowSection.price}
            </div>
            <div className="text-gray-400 mb-12 text-lg">
              {activeProduct.buyNowSection.unit}
            </div>

            <button 
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-black font-bold text-lg hover:scale-105 transition-transform"
              style={{ background: activeProduct.gradient, boxShadow: `0 20px 40px -10px ${activeProduct.themeColor}` }}
            >
              <ShoppingBag className="w-6 h-6" />
              Add to Cart
            </button>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left border-t border-white/10 pt-12">
              <div>
                <h4 className="text-white font-semibold mb-2">Delivery</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{activeProduct.buyNowSection.deliveryPromise}</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Process</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{activeProduct.buyNowSection.processingParams.join(" • ")}</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Guarantee</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{activeProduct.buyNowSection.returnPolicy}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Elements */}
      {products.length > 1 && (
        <>
          <div className="fixed top-1/2 left-4 -translate-y-1/2 z-40 hidden md:block">
            <button onClick={handlePrev} className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors">
              <ChevronLeft />
            </button>
          </div>
          <div className="fixed top-1/2 right-4 -translate-y-1/2 z-40 hidden md:block">
            <button onClick={handleNext} className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors">
              <ChevronRight />
            </button>
          </div>
        </>
      )}

      {/* Floating Bottom Navigation / Product Selector */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-full p-2 flex items-center shadow-2xl">
          {products.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setCurrentIndex(idx)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                currentIndex === idx
                  ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                  : 'text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {p.name.replace('Fresh ', '').replace('Rich ', '')}
            </button>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
