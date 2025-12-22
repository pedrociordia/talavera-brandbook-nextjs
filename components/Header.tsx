'use client'

interface HeaderProps {
  isLightTheme: boolean;
}

export default function Header({ isLightTheme }: HeaderProps) {
  return (
    <header className={`main-header ${isLightTheme ? 'light-theme' : ''}`}>
      <a href="https://hoteltalavera.com" target="_blank" rel="noopener noreferrer">
        {isLightTheme ? (
          <img 
            src="https://hoteltalavera.com/wp-content/uploads/2025/12/Logo-Hotel-Talavera-Gris-SVG.svg" 
            alt="Hotel Talavera" 
          />
        ) : (
          <img 
            src="https://hoteltalavera.com/wp-content/uploads/2025/12/Logo-Hotel-Talavera-Blanco-SVG.svg" 
            alt="Hotel Talavera" 
          />
        )}
      </a>
    </header>
  );
}
