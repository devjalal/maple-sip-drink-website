import { motion } from 'framer-motion';
import { Droplet } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center">
            <Droplet className="text-white w-5 h-5" />
          </div>
          <div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-pink-500">
              SIP
            </span>
            <p className="hidden md:block text-[10px] text-gray-300 font-light tracking-widest uppercase">
              One for Living, Enjoy Your Taste
            </p>
          </div>
        </div>
        
        <motion.button 
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 77, 109, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2.5 rounded-full bg-white text-black font-semibold tracking-wide text-sm transition-colors hover:bg-gray-100"
        >
          Order Now
        </motion.button>
      </div>
    </nav>
  );
}
