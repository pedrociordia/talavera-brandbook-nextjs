'use client'

import { navItems } from '@/lib/slideData';

interface HeaderProps {
  currentSlide: number;
  onNavigate: (slideIndex: number) => void;
  isLightTheme: boolean;
}

export default function Header({ currentSlide, onNavigate, isLightTheme }: HeaderProps) {
  return (
    <header className={`unified-header ${isLightTheme ? 'unified-header--light' : 'unified-header--dark'}`}>
      <div className="unified-header__container">
        {/* Logo */}
        <a 
          href="https://hoteltalavera.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="unified-header__logo"
        >
          <img 
            src={isLightTheme 
              ? "https://hoteltalavera.com/wp-content/uploads/2025/12/Logo-Hotel-Talavera-Gris-SVG.svg"
              : "https://hoteltalavera.com/wp-content/uploads/2025/12/Logo-Hotel-Talavera-Blanco-SVG.svg"
            }
            alt="Hotel Talavera" 
            className="unified-header__logo-img"
          />
        </a>

        {/* Navigation Menu */}
        <nav className="unified-header__nav">
          {navItems.map((item, index) => (
            <button
              key={index}
              className={`unified-header__nav-item ${currentSlide === item.slideIndex ? 'active' : ''}`}
              onClick={() => onNavigate(item.slideIndex)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
