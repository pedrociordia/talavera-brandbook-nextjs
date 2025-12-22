'use client'

import { useState, useEffect, useCallback, useRef } from 'react';
import Header from './Header';
import ScrollIndicator from './ScrollIndicator';
import Slide from './Slide';
import { slides } from '@/lib/slideData';

export default function SlidesContainer() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const isTransitioning = useRef(false);
  const touchStartY = useRef(0);

  const navigateToSlide = useCallback((index: number) => {
    if (index < 0 || index >= slides.length || isTransitioning.current) return;
    
    isTransitioning.current = true;
    setCurrentSlide(index);
    
    // Hide scroll indicator after first navigation
    if (index > 0) {
      setShowScrollIndicator(false);
    }
    
    // Reset transition lock after animation completes
    setTimeout(() => {
      isTransitioning.current = false;
    }, 600); // Match CSS transition duration
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        navigateToSlide(currentSlide + 1);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        navigateToSlide(currentSlide - 1);
      } else if (e.key === 'Home') {
        e.preventDefault();
        navigateToSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        navigateToSlide(slides.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, navigateToSlide]);

  // Mouse wheel navigation
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      if (Math.abs(e.deltaY) < 10) return; // Ignore small movements
      
      if (e.deltaY > 0) {
        navigateToSlide(currentSlide + 1);
      } else {
        navigateToSlide(currentSlide - 1);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentSlide, navigateToSlide]);

  // Touch/swipe navigation
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY.current - touchEndY;

      if (Math.abs(diff) < 50) return; // Ignore small swipes

      if (diff > 0) {
        navigateToSlide(currentSlide + 1);
      } else {
        navigateToSlide(currentSlide - 1);
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentSlide, navigateToSlide]);

  const currentTheme = slides[currentSlide].theme;

  return (
    <>
      <Header 
        currentSlide={currentSlide}
        onNavigate={navigateToSlide}
        isLightTheme={currentTheme === 'light'} 
      />
      <ScrollIndicator isVisible={showScrollIndicator && currentSlide === 0} />
      
      {/* Navigation Dots */}
      <nav className="slide-nav">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`nav-dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => navigateToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </nav>

      {/* Slides */}
      <main className="slides-container">
        {slides.map((slide) => (
          <Slide
            key={slide.id}
            theme={slide.theme}
            className={slide.className}
            isActive={currentSlide === slide.id}
          >
            {slide.content}
          </Slide>
        ))}
      </main>
    </>
  );
}
