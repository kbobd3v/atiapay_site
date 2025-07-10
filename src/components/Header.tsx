import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMenuOpen(false);
  };

  const handleDemoClick = () => {
    window.open('https://wa.me/573022740452', '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#004234] to-[#3bffc9] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo OFICIAL AtiaPay - Balanceado y limpio */}
          <div className="flex-shrink-0 transition-transform hover:scale-105">
            <img 
              src="/atia-logo-blanco.png" 
              alt="AtiaPay" 
              className="h-12 w-32 object-contain"
            />
          </div>

          {/* Desktop Navigation - Optimizado para header compacto */}
          <nav className="hidden md:flex space-x-6">
            <button
              onClick={() => scrollToSection('que-es-atia-pay')}
              className="text-white hover:text-white/80 transition-all duration-300 font-medium whitespace-nowrap hover:bg-white/10 px-2 py-1 rounded relative group"
            >
              ¿Qué es AtiaPay?
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('beneficios')}
              className="text-white hover:text-white/80 transition-all duration-300 font-medium whitespace-nowrap hover:bg-white/10 px-2 py-1 rounded relative group"
            >
              Beneficios
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('como-funciona')}
              className="text-white hover:text-white/80 transition-all duration-300 font-medium whitespace-nowrap hover:bg-white/10 px-2 py-1 rounded relative group"
            >
              ¿Cómo funciona?
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </button>
          </nav>

          {/* CTA Button - Optimizado para header compacto */}
          <div className="hidden md:block">
            <button 
              onClick={handleDemoClick}
              className="bg-[#004234] text-white px-6 py-2 rounded-full font-bold hover:bg-[#003228] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              SOLICITAR DEMO GRATIS
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-white hover:text-white/80"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation - Compacto y optimizado */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-emerald-100 bg-white/98 backdrop-blur-sm shadow-lg">
            <div className="py-4 space-y-1">
              <button
                onClick={() => scrollToSection('que-es-atia-pay')}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-white hover:bg-[#004234] font-medium transition-all duration-300 border-l-4 border-transparent hover:border-[#3bffc9]"
              >
                ¿Qué es AtiaPay?
              </button>
              <button
                onClick={() => scrollToSection('beneficios')}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-white hover:bg-[#004234] font-medium transition-all duration-300 border-l-4 border-transparent hover:border-[#3bffc9]"
              >
                Beneficios
              </button>
              <button
                onClick={() => scrollToSection('como-funciona')}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-white hover:bg-[#004234] font-medium transition-all duration-300 border-l-4 border-transparent hover:border-[#3bffc9]"
              >
                ¿Cómo funciona?
              </button>
              <div className="px-4 pt-3">
                <button 
                  onClick={handleDemoClick}
                  className="w-full bg-[#004234] text-white px-6 py-3 rounded-full font-bold hover:bg-[#003228] transition-all duration-300 shadow-lg transform hover:scale-105"
                >
                  SOLICITAR DEMO GRATIS
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
