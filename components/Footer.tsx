import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-8 overflow-hidden relative z-0">
      
      {/* Huge Brand Name overlapping sections */}
      <div className="absolute top-0 left-0 w-full -translate-y-1/2 opacity-10 pointer-events-none select-none hidden">
         <h1 className="text-[25vw] font-serif leading-none text-center text-white">Nestery</h1>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Massive Text */}
         <div className="w-full flex justify-center border-b border-white/10 pb-16 mb-16">
           <h1 className="text-[22vw] font-serif leading-[0.8] tracking-tight text-center select-none text-white">Nestery</h1>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-20">
          {/* Newsletter */}
          <div className="max-w-md">
            <h3 className="text-lg font-bold mb-4 text-white">Subscribe to our newsletter</h3>
            <p className="text-stone-400 text-xs mb-8 leading-relaxed max-w-xs">Get the most recent news, thoughts, announcements, and updates delivered straight to your inbox.</p>
            <div className="flex items-center bg-white/5 rounded-full p-1 pr-2 border border-white/10">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-transparent border-none outline-none text-white flex-1 placeholder-stone-600 text-sm px-4 py-2"
              />
              <button className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center hover:bg-stone-200 transition-colors">
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-xs">
             <div>
               <h4 className="text-stone-500 mb-6 font-bold uppercase tracking-widest">Products</h4>
               <ul className="space-y-4">
                 <li><a href="#" className="hover:text-white transition-colors">Chairs</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Tables</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Bollards</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Beds</a></li>
               </ul>
             </div>
             <div>
               <h4 className="text-stone-500 mb-6 font-bold uppercase tracking-widest">Company</h4>
               <ul className="space-y-4">
                 <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Privacy policy</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Terms of use</a></li>
               </ul>
             </div>
             <div>
               <h4 className="text-stone-500 mb-6 font-bold uppercase tracking-widest">Resources</h4>
               <ul className="space-y-4">
                 <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Materials</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
               </ul>
             </div>
             <div>
               <h4 className="text-stone-500 mb-6 font-bold uppercase tracking-widest">Social</h4>
               <ul className="space-y-4">
                 <li><a href="#" className="hover:text-white transition-colors flex items-center gap-1">Instagram </a></li>
                 <li><a href="#" className="hover:text-white transition-colors flex items-center gap-1">X (Twitter) </a></li>
               </ul>
             </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-stone-500 pt-8 border-t border-white/10 uppercase tracking-wider">
           <p>© Nestery Woods Inc.</p>
           <p>All rights reserved - 2025</p>
           <p className="flex items-center gap-1">Designed by Shakuro <span className="inline-block rotate-45 border border-stone-500 p-0.5 rounded-sm"></span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;