import { motion } from 'motion/react';
import Spline from '@splinetool/react-spline';
import { useState } from 'react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-black pt-20">
      
      {/* Text Content */}
      <div className="absolute top-1/4 z-10 flex flex-col items-center text-center px-4 w-full max-w-4xl mx-auto pointer-events-none">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white drop-shadow-2xl"
        >
          Meet your AI.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-xl md:text-2xl text-white/60 font-medium max-w-2xl"
        >
          Interactive 3D robot that follows your every move.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex gap-4 pointer-events-auto"
        >
          <button className="px-6 py-3 bg-white text-black rounded-full font-semibold text-sm hover:scale-105 transition-transform">
            Buy Now
          </button>
          <button className="px-6 py-3 bg-white/10 text-white rounded-full font-semibold text-sm hover:bg-white/20 transition-colors backdrop-blur-md border border-white/10">
            Learn more {'>'}
          </button>
        </motion.div>
      </div>

      {/* Loading State */}
      {!isLoaded && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full"
          />
        </div>
      )}

      {/* Spline 3D Scene */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.9 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 w-full h-full z-0 pointer-events-auto spline-watermark-hide"
      >
        <Spline 
          scene="https://prod.spline.design/inaVMWKZJwM641B4/scene.splinecode" 
          onLoad={() => setIsLoaded(true)}
        />
      </motion.div>

      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent z-0" />
    </section>
  );
}
