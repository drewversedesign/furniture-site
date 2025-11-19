import React from 'react';
import { Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen md:h-[110vh] md:min-h-[800px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2874&auto=format&fit=crop')` }} 
      >
        <div className="absolute inset-0 bg-black/20 md:bg-black/10"></div>
      </div>

      <div className="relative container mx-auto px-6 h-full flex flex-col justify-end pb-24 md:pb-32 pt-32 md:pt-0">
        
        {/* Floating Product Card - Right Side (Hidden on Mobile) */}
        <div className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2 md:translate-y-0 md:bottom-40 md:top-auto md:right-12 bg-white/20 backdrop-blur-xl border border-white/30 p-4 rounded-3xl max-w-xs shadow-2xl animate-fade-in-up z-20">
          <div className="flex gap-4 items-center">
            <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-white">
              <img src="https://images.unsplash.com/photo-1567538096630-e997191f7d5d?q=80&w=800&auto=format&fit=crop" alt="Chair" className="w-full h-full object-contain mix-blend-multiply" />
            </div>
            <div className="text-white">
              <h4 className="font-serif font-semibold text-lg leading-tight">Cloudhaven Lounge Chair</h4>
              <p className="text-xs text-white/80 mt-1 mb-2 leading-tight line-clamp-2">Modern lounge chair that combines soft, cloud-like comfort with elegant details.</p>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg">$999.59</span>
                <span className="text-xs text-white/60 line-through">$1299.00</span>
              </div>
            </div>
          </div>
          {/* Hotspot Dot */}
          <div className="absolute -top-12 -left-12 w-8 h-8 rounded-full border-2 border-white flex items-center justify-center animate-pulse cursor-pointer">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
        </div>

        <div className="max-w-4xl text-white mt-10 md:mt-20 relative z-10">
          {/* Glassy Nav Bar */}
          <div className="inline-flex flex-wrap md:flex-nowrap items-center gap-1 p-1 rounded-2xl md:rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 overflow-hidden">
             {['LIVING ROOM', 'KITCHEN', 'BEDROOM', 'TERRACE'].map((item, idx) => (
               <button 
                 key={item} 
                 className={`flex-1 md:flex-none px-4 md:px-6 py-2 rounded-xl md:rounded-full text-[10px] md:text-xs font-bold tracking-wide transition-all whitespace-nowrap ${idx === 0 ? 'bg-white text-stone-900 shadow-lg' : 'text-white hover:bg-white/10'}`}
               >
                 {item}
               </button>
             ))}
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-8xl font-serif leading-[0.95] md:leading-[0.9] mb-6 md:mb-8 tracking-tight break-words">
            Furniture with <br className="hidden md:block" />
            a soul, crafted <br className="hidden md:block" />
            by generations
          </h2>
          
          <p className="text-base md:text-lg text-white/90 md:text-white/80 mb-8 md:mb-10 max-w-md leading-relaxed font-light">
            Discover timeless pieces made by our family, where every detail carries the warmth of tradition and the beauty of natural wood.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <button className="px-8 py-4 bg-white text-stone-900 rounded-full text-xs font-bold hover:bg-stone-100 transition-colors tracking-widest uppercase text-center">
              Shop the collection
            </button>
            <button className="flex items-center justify-center gap-3 px-6 py-4 text-white text-xs font-bold tracking-widest uppercase hover:text-white/80 transition-colors group">
              <span className="w-6 h-6 flex items-center justify-center">
                <Play size={12} fill="currentColor" />
              </span>
              Watch our story
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;