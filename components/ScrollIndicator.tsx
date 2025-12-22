'use client'

interface ScrollIndicatorProps {
  isVisible: boolean;
}

export default function ScrollIndicator({ isVisible }: ScrollIndicatorProps) {
  return (
    <div className={`scroll-indicator ${isVisible ? '' : 'hidden'}`}>
      <div className="mouse-icon">
        <div className="mouse-wheel"></div>
      </div>
      <span className="scroll-text">Scroll</span>
    </div>
  );
}
