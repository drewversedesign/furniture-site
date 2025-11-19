import React, { useState, useRef, useEffect } from 'react';
import { Product } from '../types';
import { ShoppingBag, Heart, Check } from 'lucide-react';

const products: Product[] = [
  { id: '1', name: 'Cloudhaven Lounge Chair', category: 'Living Room', price: 999.59, originalPrice: 1299.00, image: 'https://images.unsplash.com/photo-1567538096630-e997191f7d5d?q=80&w=600&auto=format&fit=crop', isNew: true },
  { id: '2', name: 'Oakwood Dining Chair', category: 'Kitchen', price: 349.00, image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=600&auto=format&fit=crop' },
  { id: '3', name: 'Velvet Accent Armchair', category: 'Living Room', price: 789.50, image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop', isNew: true },
  { id: '4', name: 'Minimalist Sofa', category: 'Living Room', price: 1599.00, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=600&auto=format&fit=crop' },
];

const categories = [
  { name: 'Living room', count: 12 },
  { name: 'Kitchen', count: 5 },
  { name: 'Bedroom', count: 8 },
  { name: 'Terrace', count: 16 },
];

const SectionProducts: React.FC = () => {
  const [activeCat, setActiveCat] = useState('Living room');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // State for interactive elements
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());
  const [cart, setCart] = useState<Set<string>>(new Set());

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

  const toggleWishlist = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    setWishlist(prev => {
      const newWishlist = new Set(prev);
      if (newWishlist.has(id)) {
        newWishlist.delete(id);
      } else {
        newWishlist.add(id);
      }
      return newWishlist;
    });
  };

  const addToBag = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    setCart(prev => {
        const newCart = new Set(prev);
        newCart.add(id);
        return newCart;
    });
  };

  return (
    <section ref={sectionRef} className={`py-20 md:py-24 bg-[#F5F5F4] overflow-hidden transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-16 gap-8">
          <div className="flex flex-wrap items-baseline gap-x-6 md:gap-x-12 gap-y-2 md:gap-y-4">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCat(cat.name)}
                className={`relative group font-serif transition-all duration-300 leading-none flex items-start ${
                  activeCat === cat.name 
                    ? 'text-3xl md:text-4xl lg:text-5xl text-stone-900' 
                    : 'text-2xl md:text-3xl lg:text-4xl text-stone-300 hover:text-stone-400'
                }`}
              >
                {cat.name}
                <span className={`ml-1 text-[10px] md:text-sm font-sans font-medium transform -translate-y-1 md:-translate-y-2 ${
                   activeCat === cat.name ? 'text-stone-400' : 'text-stone-300'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
          
          <button className="px-8 py-4 bg-stone-900 text-white text-xs font-bold rounded-full hover:bg-stone-800 transition-colors uppercase tracking-wider self-start lg:self-center">
            All Products
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => {
            const isWishlisted = wishlist.has(product.id);
            const isAdded = cart.has(product.id);
            
            return (
            <div 
              key={product.id} 
              className={`group relative p-4 rounded-[2.5rem] transition-all duration-500 cursor-pointer ${
                 idx === 2 ? 'bg-white shadow-2xl md:-translate-y-4 z-10 md:scale-105' : 'bg-[#EDEDE9] hover:bg-white hover:shadow-xl hover:-translate-y-2'
              }`}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] rounded-[2rem] mb-6 overflow-hidden flex items-center justify-center bg-white/50 group-hover:bg-transparent transition-colors">
                 
                 {/* New Tag */}
                 {(idx === 2 || product.isNew) && (
                    <span className="absolute top-5 left-5 bg-orange-400 text-white text-[10px] font-bold px-4 py-1.5 rounded-full z-20 tracking-widest shadow-md">1 WEEK</span>
                 )}

                 {/* Wishlist Button */}
                 <button 
                    onClick={(e) => toggleWishlist(e, product.id)}
                    className="absolute top-5 right-5 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md z-20 hover:scale-110 transition-transform active:scale-90"
                    aria-label="Add to wishlist"
                 >
                    <Heart 
                        size={18} 
                        className={`transition-all duration-300 ${isWishlisted ? 'fill-red-500 text-red-500 scale-110' : 'text-stone-400 hover:text-stone-600'}`} 
                    />
                 </button>
                 
                 <div className="w-full h-full p-6 flex items-center justify-center overflow-hidden relative z-0">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 ease-out group-hover:scale-125 origin-center" 
                    />
                 </div>
                 
                 {/* Add to Bag Button (Slides up) */}
                 <button
                    onClick={(e) => addToBag(e, product.id)}
                    className={`absolute bottom-6 left-1/2 -translate-x-1/2 h-12 px-6 rounded-full shadow-xl flex items-center gap-2 z-20 transition-all duration-500 ease-out transform
                        ${isAdded 
                            ? 'bg-stone-900 text-white translate-y-0 opacity-100' 
                            : 'bg-white text-stone-900 translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-stone-100'
                        }
                    `}
                 >
                    {isAdded ? (
                        <>
                            <Check size={16} className="text-green-400" />
                            <span className="text-xs font-bold uppercase tracking-wider text-white">Added</span>
                        </>
                    ) : (
                        <>
                             <ShoppingBag size={16} />
                             <span className="text-xs font-bold uppercase tracking-wider">Add to Bag</span>
                        </>
                    )}
                 </button>
              </div>

              {/* Content */}
              <div className="px-2 mb-2">
                 <h3 className="text-lg font-serif text-stone-900 mb-1 leading-tight">{product.name}</h3>
                 <div className="flex items-baseline gap-3 mt-2">
                   <span className="text-lg font-bold text-stone-900">${product.price}</span>
                   {product.originalPrice && (
                     <span className="text-sm text-stone-400 line-through">${product.originalPrice.toFixed(2)}</span>
                   )}
                 </div>
              </div>
            </div>
          )})}
        </div>

      </div>
    </section>
  );
};

export default SectionProducts;