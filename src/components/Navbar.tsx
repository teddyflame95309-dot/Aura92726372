import { motion } from 'motion/react';
import { Menu, Search, ShoppingBag } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-4 py-3 bg-black/70 backdrop-blur-md border-b border-white/10"
    >
      <div className="flex items-center justify-between w-full max-w-5xl">
        <div className="flex items-center gap-6 md:hidden">
          <button className="text-white/80 hover:text-white transition-colors">
            <Menu size={20} />
          </button>
        </div>
        
        <a href="#" className="text-white font-semibold text-xl tracking-tighter">
          
        </a>

        <div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide text-white/80">
          {['Models', 'Capabilities', 'Software', 'Hardware', 'Accessories', 'Support'].map((item) => (
            <a key={item} href="#" className="hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <button className="text-white/80 hover:text-white transition-colors">
            <Search size={18} />
          </button>
          <button className="text-white/80 hover:text-white transition-colors">
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
