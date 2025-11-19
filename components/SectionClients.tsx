import React, { useRef, useEffect, useState } from 'react';
import { Home, ArrowRight } from 'lucide-react';

const SectionClients: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className={`py-20 md:py-24 bg-[#fafaf9] transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-6">
        <div className="mb-12 md:mb-16">
          <p className="text-xs text-stone-400 font-bold uppercase tracking-widest mb-2">Clients</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif max-w-3xl leading-snug text-stone-800">
            Our furniture is chosen by brands and spaces that value design, quality, and character. From boutique hotels to creative studios, Amberwood pieces bring warmth and authenticity to every interior.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {/* Airbnb Card */}
            <div className="bg-white p-4 rounded-[2.5rem] shadow-sm relative overflow-hidden group">
              <div className="h-56 md:h-64 rounded-[2rem] overflow-hidden mb-6 relative">
                <img src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=800&auto=format&fit=crop" alt="Workspace" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-20 h-20">
                     {/* Airbnb Logo approximation */}
                     <svg viewBox="0 0 24 24" fill="#FF5A5F" xmlns="http://www.w3.org/2000/svg">
                       <path d="M21.853 9.561C21.853 9.561 17.933 4.292 16.008 2.362C15.281 1.628 14.221 0.936 12.007 1.004C9.793 0.936 8.733 1.628 8.007 2.362C6.082 4.292 2.162 9.561 2.162 9.561C0.455 11.739 0 13.188 0 15.054C0 18.575 2.836 21.742 7.232 21.989C9.114 22.095 10.688 21.18 12.007 19.663C13.326 21.18 14.9 22.095 16.782 21.989C21.178 21.742 24.014 18.575 24.014 15.054C24 13.188 23.56 11.739 21.853 9.561ZM12.007 17.093C10.069 14.92 7.674 10.834 12.007 5.81C16.368 10.834 13.946 14.92 12.007 17.093Z"/>
                     </svg>
                   </div>
                </div>
              </div>
              <div className="px-2 md:px-4 pb-4">
                <p className="text-stone-600 italic text-sm mb-6 leading-relaxed font-serif">
                  "Nestery's furniture transformed our coworking spaces. Every piece tells a story and creates a warm, inviting atmosphere for our members."
                </p>
                <div className="flex justify-between items-end border-t border-stone-100 pt-4">
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm">Sarah M.</h4>
                    <p className="text-xs text-stone-400">Community Manager, Airbnb</p>
                  </div>
                  <div className="text-[#FF5A5F] font-bold flex items-center gap-1">
                    airbnb
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Left Image */}
            <div className="h-48 rounded-[2.5rem] overflow-hidden relative">
               <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop" alt="Chair detail" className="w-full h-full object-cover object-bottom" />
               <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                 ACE HOTEL
               </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 h-full">
            {/* WeWork Image */}
            <div className="flex-1 bg-stone-200 rounded-[2.5rem] overflow-hidden relative min-h-[300px] md:min-h-[400px] group">
               <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop" alt="Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
               <div className="absolute bottom-6 right-6">
                  <span className="font-serif font-bold text-stone-900 text-2xl">wework</span>
               </div>
            </div>
            
            {/* Clients Pill */}
            <div className="bg-white rounded-full p-4 flex items-center justify-between shadow-sm">
               <div className="flex -space-x-2 items-center">
                  {/* Fake Logos */}
                  <div className="w-10 h-10 rounded-full bg-stone-100 border-2 border-white flex items-center justify-center text-[8px] font-bold text-stone-400">R</div>
                  <div className="w-10 h-10 rounded-full bg-stone-100 border-2 border-white flex items-center justify-center text-[8px] font-bold text-stone-400">★</div>
                  <div className="w-10 h-10 rounded-full bg-stone-100 border-2 border-white flex items-center justify-center text-[8px] font-bold text-stone-400">T</div>
                  <div className="w-10 h-10 rounded-full bg-stone-100 border-2 border-white flex items-center justify-center text-[8px] font-bold text-stone-400">RH</div>
               </div>
               <div className="text-xs font-medium flex items-center gap-4 pl-4">
                  <div className="leading-tight text-stone-500">
                    More than 200 clients <br/> from all over the world
                  </div>
                  <div className="w-8 h-8 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center shrink-0">
                    <ArrowRight size={14} />
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SectionClients;