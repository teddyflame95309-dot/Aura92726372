import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="w-full bg-zinc-950 py-12 px-4 md:px-8 border-t border-white/10 flex justify-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <p className="text-white/40 text-xs font-medium">
            Copyright © 2026 Apple Inc. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs font-medium text-white/60 justify-center md:justify-start">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="text-white/20">|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <span className="text-white/20">|</span>
            <a href="#" className="hover:text-white transition-colors">Sales and Refunds</a>
            <span className="text-white/20">|</span>
            <a href="#" className="hover:text-white transition-colors">Legal</a>
            <span className="text-white/20">|</span>
            <a href="#" className="hover:text-white transition-colors">Site Map</a>
          </div>
        </div>
        
        <div className="text-xs font-medium text-white/60">
          United States
        </div>
      </div>
    </footer>
  );
}
