interface SlideProps {
  theme: 'light' | 'dark';
  className: string;
  isActive: boolean;
  children: React.ReactNode;
}

export default function Slide({ theme, className, isActive, children }: SlideProps) {
  return (
    <section
      className={`slide ${className} ${isActive ? 'active' : ''}`}
      data-theme={theme}
    >
      <div className="slide-content">
        {children}
      </div>
    </section>
  );
}
