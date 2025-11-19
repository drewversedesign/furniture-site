import React, { useRef, useEffect, useState } from 'react';
import { Armchair, Sofa, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  { 
    title: 'Reading Corner', 
    image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=1600&auto=format&fit=crop',
    description: 'A quiet space for reflection, featuring our signature lounge chair.'
  },
  { 
    title: 'Modern Kitchen', 
    image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=1600&auto=format&fit=crop',
    description: 'The heart of the home, crafted with sustainable oak and stone.'
  },
  { 
    title: 'Sunlit Terrace', 
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop',
    description: 'Blending indoors and outdoors with weather-resistant woven furniture.'
  },
  { 
    title: 'Open Living', 
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop',
    description: 'Spacious comfort designed for gathering and connection.'
  }
];

const SectionManifesto: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section ref={sectionRef} className={`py-20 md:py-32 bg-[#fafaf9] transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto mb-16 md:mb-24">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-serif leading-[1.4] text-stone-900">
            At Nestery, we don't just craft furniture – we create heirlooms. 
            <span className="inline-flex align-middle mx-1 md:mx-2 p-1 bg-stone-200 rounded-lg rotate-3">
               <Armchair className="text-stone-800" size={20} strokeWidth={1.5} />
            </span>
            Every piece is made by our family, with passion and care passed down through generations. 
            <span className="inline-flex align-middle mx-1 md:mx-2 p-1 bg-stone-200 rounded-lg -rotate-3">
               <Sofa className="text-stone-800" size={20} strokeWidth={1.5} />
            </span>
            We use only the finest natural materials, ensuring that each item is not only beautiful 
            <span className="inline-flex align-middle mx-1 md:mx-2">
                <img src="https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=100&auto=format&fit=crop" alt="Wood" className="w-8 h-6 md:w-10 md:h-8 rounded-md object-cover grayscale opacity-50" />
            </span>
            but built to last a lifetime. 
            <span className="opacity-30"> With every curve of wood and stitch of fabric, we bring warmth, tradition, and sustainability into your home.</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative h-[400px] md:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl group select-none">
            {/* Slides */}
            {slides.map((slide, index) => (
                <div 
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${index === currentIndex ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'}`}
                >
                    <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-black/20 md:bg-black/10"></div>
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col md:flex-row justify-between items-end gap-4">
                        <div className={`text-white transform transition-all duration-700 delay-300 ${index === currentIndex ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                             <h3 className="text-3xl md:text-5xl font-serif mb-2">{slide.title}</h3>
                             <p className="text-white/90 text-sm md:text-base font-light max-w-md">{slide.description}</p>
                        </div>
                        
                        {/* Index number */}
                         <div className={`text-white/40 font-serif text-6xl hidden md:block transform transition-all duration-700 delay-300 ${index === currentIndex ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                             0{index + 1}
                         </div>
                    </div>
                </div>
            ))}

            {/* Controls */}
            <button 
                onClick={prevSlide} 
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 transition-all hover:scale-110"
                aria-label="Previous slide"
            >
                <ChevronLeft size={28} />
            </button>
            <button 
                onClick={nextSlide} 
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 transition-all hover:scale-110"
                aria-label="Next slide"
            >
                <ChevronRight size={28} />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-2 bg-black/20 backdrop-blur-sm p-2 rounded-full border border-white/10">
                {slides.map((_, idx) => (
                    <button 
                        key={idx} 
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'}`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default SectionManifesto;