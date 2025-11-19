import React, { useState, useRef, useEffect } from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { FAQItem } from '../types';

const faqs: FAQItem[] = [
  { question: 'How long does it take to craft a piece of furniture?', answer: 'Since our furniture is made to order, standard production time is between 4 to 6 weeks. For custom pieces, it may take up to 8 weeks.' },
  { question: 'Can I customize the color or material of a product?', answer: 'Absolutely! At Nestery, we offer a range of wood finishes and upholstery options. You can select the combination that best fits your home on the product page.' },
  { question: 'Do you offer international shipping?', answer: 'Yes, we ship worldwide. Shipping costs and timelines vary depending on the destination. Please check our shipping policy for more details.' },
  { question: 'What materials do you use in your furniture?', answer: 'We use strictly sustainable, solid wood (Oak, Walnut, Ash) and high-quality natural fabrics like linen, wool, and cotton velvet.' },
  { question: 'How should I care for my Nestery furniture?', answer: 'We recommend dusting regularly and keeping wood away from direct heat sources. Use a soft cloth for cleaning and avoid harsh chemicals.' },
  { question: 'Do you provide warranty or repair services?', answer: 'All our furniture comes with a 5-year structural warranty. We also offer repair services for a fee if damage occurs outside warranty terms.' },
];

const SectionFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(3);
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
    <section ref={sectionRef} className={`py-24 bg-[#F5F5F4] relative transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          {/* Left Side */}
          <div className="lg:w-1/3 relative">
            <span className="text-xs font-bold text-stone-400 uppercase mb-4 block tracking-widest">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-8 leading-snug">
              From how we craft our pieces to shipping details, here's a quick guide to help you get the most out of your Nestery experience.
            </h2>
            
            {/* Floating image for visual balance matching screenshot */}
            <div className="hidden lg:block absolute -right-24 top-48 z-10">
               <div className="w-64 h-72 rounded-[2.5rem] overflow-hidden shadow-2xl rotate-6 border-4 border-white">
                  <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=600&auto=format&fit=crop" alt="Patio" className="w-full h-full object-cover" />
               </div>
            </div>
          </div>

          {/* Right Side - Accordion */}
          <div className="lg:w-2/3 lg:pl-10">
            <div className="divide-y divide-stone-200">
              {faqs.map((faq, index) => (
                <div key={index} className="py-6 group">
                  <button 
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex justify-between items-center text-left focus:outline-none"
                  >
                    <span className={`text-lg font-medium transition-colors ${openIndex === index ? 'text-stone-900' : 'text-stone-500 group-hover:text-stone-700'}`}>
                      {faq.question}
                    </span>
                    <span className={`flex items-center justify-center w-8 h-8 rounded-full transition-colors ${openIndex === index ? 'bg-black text-white' : 'text-stone-300'}`}>
                      {openIndex === index ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                    <p className="text-stone-500 leading-relaxed pr-8 text-sm font-light">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFAQ;