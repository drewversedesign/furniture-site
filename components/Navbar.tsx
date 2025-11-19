import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-stone-50/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-serif font-bold tracking-tight">Nestery</h1>
          <div className="hidden md:flex gap-6 text-sm font-medium text-stone-600">
            <a href="#" className="hover:text-stone-900 transition-colors">Brand Promise</a>
            <a href="#" className="hover:text-stone-900 transition-colors">Featured Products</a>
            <a href="#" className="hover:text-stone-900 transition-colors">Collections</a>
            <a href="#" className="hover:text-stone-900 transition-colors">Terrace</a>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button className="hidden md:flex items-center gap-2 text-xs font-medium hover:opacity-70">
            SEARCH
            <Search size={14} />
          </button>
          <span className="hidden md:block text-xs font-medium">US</span>
          <button className="flex items-center gap-2 text-xs font-medium hover:opacity-70">
            BAG
            <ShoppingBag size={14} />
          </button>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-stone-50 border-t border-stone-200 p-6 md:hidden flex flex-col gap-4 shadow-xl">
          <a href="#" className="text-lg font-serif">Brand Promise</a>
          <a href="#" className="text-lg font-serif">Featured Products</a>
          <a href="#" className="text-lg font-serif">Collections</a>
          <a href="#" className="text-lg font-serif">Terrace</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;