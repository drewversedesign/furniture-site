import React, { useRef, useEffect, useState } from 'react';
import { TeamMember } from '../types';

const team: TeamMember[] = [
  { name: 'Ethan Marlowe', role: 'Master Craftsman & Family Founder', image: 'https://picsum.photos/id/1005/400/500', quote: 'Wood speaks to those who listen.' },
  { name: 'Isla Thornton', role: 'Sustainability & Materials Curator', image: 'https://picsum.photos/id/338/400/500', quote: 'Nature is our greatest designer.' },
  { name: 'Clara Winslow', role: 'Design Visionary & Interior Stylist', image: 'https://picsum.photos/id/64/400/500', quote: 'Comfort is the ultimate luxury.' },
];

const SectionTeam: React.FC = () => {
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
    <section ref={sectionRef} className={`py-24 bg-stone-50 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-sm text-stone-500 uppercase tracking-widest mb-4">Why choose Nestery</p>
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900 leading-tight">
            We believe in furniture that tells a story. Every piece we craft combines timeless design, exceptional quality, and a commitment to sustainability, so you can bring home more than just a chair or table - you bring a legacy.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[4/5]">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                   <p className="text-white text-center px-4 font-serif italic">"{member.quote}"</p>
                </div>
              </div>
              <h3 className="text-lg font-bold text-stone-900">{member.name}</h3>
              <p className="text-sm text-stone-500 mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionTeam;