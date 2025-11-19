import React, { useState, useEffect, useRef } from 'react';
import { Pause, Volume2 } from 'lucide-react';

const tabs = [
  { id: 'story', label: 'Our story', content: 'Nestery began as a small family workshop over three generations ago. Inspired by tradition and a love for natural materials.', image: 'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?q=80&w=1000&auto=format&fit=crop' },
  { id: 'craft', label: 'Craftsmanship', content: 'Our master craftsmen dedicate countless hours to perfecting every curve and joint. We believe that true quality cannot be rushed.', image: 'https://images.unsplash.com/photo-1617364852223-75f57e78dc96?q=80&w=1000&auto=format&fit=crop' },
  { id: 'sustain', label: 'Sustainability', content: 'We are committed to the planet. All our wood is sourced from certified sustainable forests, and we use eco-friendly finishes.', image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000&auto=format&fit=crop' },
];

const SectionStory: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
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
    <section ref={sectionRef} className={`py-20 md:py-32 bg-[#fafaf9] transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 relative">
          
          {/* Left: Navigation */}
          <div className="w-full lg:w-1/3 z-10">
            <div className="flex flex-col items-start gap-4 md:gap-6">
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(index)}
                  className={`text-2xl md:text-3xl lg:text-4xl font-serif transition-all duration-300 flex items-center gap-4 ${activeTab === index ? 'text-stone-900' : 'text-stone-300 hover:text-stone-400'}`}
                >
                  {activeTab === index && <span className="w-2 h-2 rounded-full bg-orange-400"></span>}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Center: Floating Card */}
          <div className="lg:absolute lg:left-[35%] lg:top-1/2 lg:-translate-y-1/2 lg:z-20 w-full max-w-sm order-last lg:order-none">
            <div className="bg-[#EAE8E2] p-6 rounded-[2rem] shadow-xl animate-fade-in">
               <div className="h-40 overflow-hidden mb-6 rounded-2xl relative">
                 <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop" alt="Detail" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-serif text-3xl drop-shadow-md">Nestery</span>
                 </div>
               </div>
               <p className="text-stone-600 leading-relaxed text-sm font-medium">
                 {tabs[activeTab].content}
               </p>
            </div>
          </div>

          {/* Right: Large Image/Video */}
          <div className="lg:w-1/2 w-full flex justify-end">
            <div className="relative h-[400px] md:h-[600px] w-full max-w-md rounded-[2.5rem] overflow-hidden shadow-2xl">
               <img 
                 src={tabs[activeTab].image} 
                 alt={tabs[activeTab].label} 
                 className="w-full h-full object-cover transition-all duration-500 grayscale-[20%]"
               />
               <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
                 <div className="flex gap-2 text-white text-xs font-medium">
                     <span>||</span>
                 </div>
                 <div className="text-white">
                     <Volume2 size={16} />
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionStory;