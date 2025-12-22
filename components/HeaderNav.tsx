'use client'

import { navItems } from '@/lib/slideData';

interface HeaderNavProps {
  currentSlide: number;
  onNavigate: (slideIndex: number) => void;
}

export default function HeaderNav({ currentSlide, onNavigate }: HeaderNavProps) {
  return (
    <nav className="header-nav">
      {navItems.map((item, index) => (
        <button
          key={index}
          className={`nav-item ${currentSlide === item.slideIndex ? 'active' : ''}`}
          onClick={() => onNavigate(item.slideIndex)}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}
