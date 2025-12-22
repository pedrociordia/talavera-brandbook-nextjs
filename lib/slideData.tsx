export interface SlideData {
  id: number;
  theme: 'light' | 'dark';
  className: string;
  content: React.ReactNode;
}

export const slides: SlideData[] = [
  // Slide 0: Cover
  {
    id: 0,
    theme: 'dark',
    className: 'slide-cover',
    content: (
      <div className="cover-center">
        <h1 className="super-title">Hotel Talavera</h1>
        <p className="subtitle">Visual Identity & Brand System</p>
      </div>
    ),
  },

  // Slide 1: Philosophy
  {
    id: 1,
    theme: 'light',
    className: 'slide-philosophy',
    content: (
      <div className="grid-2col">
        <div className="col-text">
          <h2 className="section-title">Philosophy</h2>
          <h3 className="philosophy-tagline">Comodidad y Cercanía</h3>
          <p className="body-text">
            Hotel Talavera se define por dos valores esenciales: la comodidad de un espacio diseñado para el descanso y la cercanía de un servicio humano, profesional y atento.
          </p>
          <p className="body-text">
            Nos posicionamos como hotel de referencia en Talavera de la Reina, conectando a nuestros huéspedes con el centro histórico, la cultura local y la eficiencia del viaje de negocios.
          </p>
        </div>
        <div className="col-image">
          <img src="https://hoteltalavera.com/wp-content/uploads/2025/07/DobleSuperior-Talavera-6.jpg" alt="Habitación Hotel Talavera" />
        </div>
      </div>
    ),
  },

  // Slide 2: Brand Positioning
  {
    id: 2,
    theme: 'dark',
    className: 'slide-positioning',
    content: (
      <>
        <h2 className="section-title">Brand Positioning</h2>
        <div className="positioning-grid">
          <div className="positioning-card glass">
            <h4>Categoría</h4>
            <p>Hotel 4 estrellas urbano en el centro de Talavera de la Reina</p>
          </div>
          <div className="positioning-card glass">
            <h4>Ubicación Estratégica</h4>
            <p>A pocos metros del casco histórico. A una hora de Madrid con excelente conexión por carretera</p>
          </div>
          <div className="positioning-card glass">
            <h4>Instalaciones</h4>
            <p>103 habitaciones amplias y funcionales. Diseño moderno orientado a confort y eficiencia</p>
          </div>
          <div className="positioning-card glass">
            <h4>Servicios</h4>
            <p>Restaurante buffet, cafetería con tapas tradicionales, salas de reuniones, parking con cargador eléctrico</p>
          </div>
          <div className="positioning-card glass">
            <h4>Público Objetivo</h4>
            <p>Viajeros de ocio, turismo cultural, viaje de negocios y eventos corporativos</p>
          </div>
          <div className="positioning-card glass">
            <h4>Tono de Marca</h4>
            <p>Claro, calmado, profesional, cercano y generador de confianza</p>
          </div>
        </div>
      </>
    ),
  },

  // Slide 3: Logo System
  {
    id: 3,
    theme: 'light',
    className: 'slide-logo',
    content: (
      <>
        <h2 className="section-title">Logo System</h2>
        <div className="logo-showcase">
          <div className="logo-variant light-bg">
            <img src="https://hoteltalavera.com/wp-content/uploads/2025/07/Logo-Hotel-Talavera-Gris-PNG-e1766430526996.png" alt="Logo Gris" />
            <p className="logo-label">Versión Gris (fondos claros)</p>
            <div className="download-options">
              <a href="https://hoteltalavera.com/wp-content/uploads/2025/07/Logo-Hotel-Talavera-Gris-PNG-e1766430526996.png" download className="download-btn">PNG</a>
            </div>
          </div>
          <div className="logo-variant dark-bg">
            <img src="https://hoteltalavera.com/wp-content/uploads/2025/12/Logo-Hotel-Talavera-Blanco-SVG.svg" alt="Logo Blanco" />
            <p className="logo-label">Versión Blanca (fondos oscuros)</p>
            <div className="download-options">
              <a href="https://hoteltalavera.com/wp-content/uploads/2025/12/Logo-Hotel-Talavera-Blanco-SVG.svg" download className="download-btn">SVG</a>
              <a href="https://hoteltalavera.com/wp-content/uploads/2025/12/Logo-Hotel-Talavera-Blanco-PNG.png" download className="download-btn">PNG</a>
            </div>
          </div>
        </div>
        <div className="logo-rules">
          <div className="rule-box glass">
            <h4>Clear Space</h4>
            <p>Mantener un espacio mínimo equivalente a la altura de la "H" del logo en todos los lados</p>
          </div>
          <div className="rule-box glass">
            <h4>Minimum Size</h4>
            <p>Ancho mínimo: 120px digital / 30mm impreso</p>
          </div>
          <div className="rule-box glass">
            <h4>Incorrect Usage</h4>
            <p>No distorsionar, no rotar, no cambiar colores, no aplicar efectos no autorizados</p>
          </div>
        </div>
      </>
    ),
  },

  // Slide 4: Typography - Montserrat
  {
    id: 4,
    theme: 'light',
    className: 'slide-typography-montserrat',
    content: (
      <>
        <div className="typo-header">
          <div className="typo-eyebrow montserrat-font">TYPOGRAPHY</div>
          <h2 className="typo-main-title montserrat-font">Headings & Titles — Montserrat</h2>
          <p className="typo-intro montserrat-font">
            Tipografía principal para títulos, encabezados y declaraciones de marca.
          </p>
        </div>
        
        <div className="typo-layout">
          <div className="typo-col-left">
            <div className="typo-block">
              <h3 className="typo-section-label montserrat-font">SPECIMENS</h3>
              <div className="typo-specimens-montserrat">
                <div className="specimen-line montserrat-font">Hotel Talavera</div>
                <div className="specimen-line montserrat-font">Comodidad y Cercanía</div>
                <div className="specimen-line montserrat-font">Visual Identity System</div>
              </div>
            </div>
          </div>

          <div className="typo-col-right">
            <div className="typo-block">
              <h3 className="typo-section-label montserrat-font">TYPE HIERARCHY</h3>
              <div className="typo-hierarchy-stack">
                <div className="hierarchy-card-compact glass">
                  <span className="hierarchy-tag montserrat-font">H1</span>
                  <div className="hierarchy-example montserrat-font">Hotel Talavera</div>
                  <span className="hierarchy-detail">48px / 700</span>
                </div>
                <div className="hierarchy-card-compact glass">
                  <span className="hierarchy-tag montserrat-font">H2</span>
                  <div className="hierarchy-example montserrat-font">Brand Positioning</div>
                  <span className="hierarchy-detail">36px / 600</span>
                </div>
                <div className="hierarchy-card-compact glass">
                  <span className="hierarchy-tag montserrat-font">H3</span>
                  <div className="hierarchy-example montserrat-font">Typography</div>
                  <span className="hierarchy-detail">28px / 600</span>
                </div>
              </div>
            </div>

            <div className="typo-block">
              <h3 className="typo-section-label montserrat-font">ALPHABET</h3>
              <div className="typo-alphabet-box montserrat-font">
                <div>ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
                <div>abcdefghijklmnopqrstuvwxyz</div>
                <div>0123456789</div>
              </div>
            </div>

            <div className="typo-block typo-block-download">
              <a href="https://fonts.google.com/download?family=Montserrat" className="download-btn montserrat-font">
                Download Montserrat
              </a>
            </div>
          </div>
        </div>
      </>
    ),
  },

  // Slide 5: Typography - Red Hat Text
  {
    id: 5,
    theme: 'dark',
    className: 'slide-typography-redhat',
    content: (
      <>
        <div className="typo-header">
          <div className="typo-eyebrow montserrat-font">TYPOGRAPHY</div>
          <h2 className="typo-main-title redhat-font">Body Text & UI — Red Hat Text</h2>
          <p className="typo-intro redhat-font">
            Tipografía secundaria para textos de cuerpo, descripciones y etiquetas de interfaz.
          </p>
        </div>
        
        <div className="typo-layout">
          <div className="typo-col-left">
            <div className="typo-block">
              <h3 className="typo-section-label montserrat-font">SPECIMENS</h3>
              <div className="typo-specimens-redhat glass">
                <p className="redhat-font">
                  Hotel de referencia en Talavera de la Reina
                </p>
                <p className="redhat-font">
                  Situado a pocos metros del casco histórico, Hotel Talavera cuenta con 103 habitaciones amplias, luminosas y confortables.
                </p>
              </div>
            </div>
          </div>

          <div className="typo-col-right">
            <div className="typo-block">
              <h3 className="typo-section-label montserrat-font">TEXT SIZES</h3>
              <div className="typo-hierarchy-stack">
                <div className="hierarchy-card-compact glass">
                  <span className="hierarchy-tag montserrat-font">Large</span>
                  <div className="hierarchy-example redhat-font">Hotel de referencia</div>
                  <span className="hierarchy-detail">18px / 500</span>
                </div>
                <div className="hierarchy-card-compact glass">
                  <span className="hierarchy-tag montserrat-font">Regular</span>
                  <div className="hierarchy-example redhat-font">103 habitaciones amplias</div>
                  <span className="hierarchy-detail">16px / 400</span>
                </div>
                <div className="hierarchy-card-compact glass">
                  <span className="hierarchy-tag montserrat-font">Small</span>
                  <div className="hierarchy-example redhat-font">UI labels</div>
                  <span className="hierarchy-detail">14px / 400</span>
                </div>
              </div>
            </div>

            <div className="typo-block">
              <h3 className="typo-section-label montserrat-font">ALPHABET</h3>
              <div className="typo-alphabet-box redhat-font">
                <div>ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
                <div>abcdefghijklmnopqrstuvwxyz</div>
                <div>0123456789</div>
              </div>
            </div>

            <div className="typo-block typo-block-download">
              <a href="https://fonts.google.com/download?family=Red+Hat+Text" className="download-btn redhat-font">
                Download Red Hat Text
              </a>
            </div>
          </div>
        </div>
      </>
    ),
  },

  // Slide 6: Color System
  {
    id: 6,
    theme: 'dark',
    className: 'slide-colors',
    content: (
      <>
        <h2 className="section-title">Color System</h2>
        <div className="colors-grid">
          <div className="color-card glass">
            <div className="color-swatch" style={{ background: '#1C1C1C' }}></div>
            <h4>Eerie Black</h4>
            <p className="color-value">#1C1C1C</p>
            <p className="color-usage">Primary dark backgrounds, text on light</p>
          </div>
          <div className="color-card glass">
            <div className="color-swatch" style={{ background: '#656B71' }}></div>
            <h4>Dim Gray</h4>
            <p className="color-value">#656B71</p>
            <p className="color-usage">Secondary text, borders, subtle elements</p>
          </div>
          <div className="color-card glass">
            <div className="color-swatch" style={{ background: '#FF2436' }}></div>
            <h4>Imperial Red</h4>
            <p className="color-value">#FF2436</p>
            <p className="color-usage">Accent only (max 5% screen coverage)</p>
          </div>
          <div className="color-card glass">
            <div className="color-swatch" style={{ background: '#FFFFFF', border: '1px solid rgba(255,255,255,0.1)' }}></div>
            <h4>White</h4>
            <p className="color-value">#FFFFFF</p>
            <p className="color-usage">Light backgrounds, text on dark</p>
          </div>
        </div>
        <div className="color-rules">
          <div className="rule-item glass">
            <h4>Light Mode</h4>
            <p>Background: White (#FFFFFF)<br/>Primary text: Eerie Black (#1C1C1C)<br/>Secondary text: Dim Gray (#656B71)</p>
          </div>
          <div className="rule-item glass">
            <h4>Dark Mode</h4>
            <p>Background: Eerie Black (#1C1C1C)<br/>Primary text: White (#FFFFFF)<br/>Secondary text: Dim Gray (#656B71)</p>
          </div>
          <div className="rule-item glass">
            <h4>Accent Usage</h4>
            <p>Imperial Red should never exceed 5% of any screen. Use for CTAs, highlights, and strategic focal points only.</p>
          </div>
        </div>
      </>
    ),
  },

  // Slide 7: Photography Style
  {
    id: 7,
    theme: 'light',
    className: 'slide-photography',
    content: (
      <>
        <h2 className="section-title">Photography Style</h2>
        <div className="photo-grid">
          <div className="photo-item">
            <img src="https://hoteltalavera.com/wp-content/uploads/2025/07/DobleSuperior-Talavera-3.jpg" alt="Photography 1" />
          </div>
          <div className="photo-item">
            <img src="https://hoteltalavera.com/wp-content/uploads/2025/07/Buffet-Talavera-23.jpg" alt="Photography 2" />
          </div>
          <div className="photo-item">
            <img src="https://hoteltalavera.com/wp-content/uploads/2025/07/Salas-Talavera-46.jpg" alt="Photography 3" />
          </div>
          <div className="photo-item">
            <img src="https://hoteltalavera.com/wp-content/uploads/2025/07/Pasillo-Talavera-51.jpg" alt="Photography 4" />
          </div>
        </div>
        <div className="photo-principles">
          <div className="principle glass">
            <h4>Editorial Framing</h4>
            <p>Composiciones arquitectónicas que enfatizan líneas, luz natural y amplitud espacial</p>
          </div>
          <div className="principle glass">
            <h4>Architectural Calm</h4>
            <p>Imágenes serenas que transmiten orden, limpieza y confort sin ruido visual</p>
          </div>
          <div className="principle glass">
            <h4>Natural Lighting</h4>
            <p>Priorizar luz natural siempre que sea posible para resaltar texturas y crear atmósferas cálidas</p>
          </div>
          <div className="principle glass">
            <h4>Human Touch</h4>
            <p>Cuando se incluyen personas, deben aparecer de forma natural, relajada, sin poses forzadas</p>
          </div>
        </div>
      </>
    ),
  },

  // Slide 8: Digital Experience
  {
    id: 8,
    theme: 'dark',
    className: 'slide-digital',
    content: (
      <>
        <h2 className="section-title">Digital Experience</h2>
        <div className="digital-grid">
          <div className="digital-principle glass">
            <h4>Ultra Clean</h4>
            <p>Interfaces minimalistas sin ruido visual. Cada elemento tiene un propósito claro.</p>
          </div>
          <div className="digital-principle glass">
            <h4>Neomorphic + Liquid Glass</h4>
            <p>Uso de efectos glassmorphism, soft shadows y profundidad sutil para crear interfaces premium.</p>
          </div>
          <div className="digital-principle glass">
            <h4>Editorial Layout</h4>
            <p>Grandes espacios en blanco, grids fuertes, jerarquía tipográfica clara.</p>
          </div>
          <div className="digital-principle glass">
            <h4>Smooth Interactions</h4>
            <p>Transiciones lentas, suaves y cinematográficas. Todo se siente intencional.</p>
          </div>
          <div className="digital-principle glass">
            <h4>Responsive First</h4>
            <p>Desktop first, mobile adapted. Experiencia consistente en todos los dispositivos.</p>
          </div>
          <div className="digital-principle glass">
            <h4>Performance</h4>
            <p>Carga rápida, imágenes optimizadas, código limpio y mantenible.</p>
          </div>
        </div>
        <div className="web-reference">
          <p className="ref-label">Website oficial</p>
          <a href="https://hoteltalavera.com" target="_blank" rel="noopener noreferrer" className="web-link">hoteltalavera.com</a>
        </div>
      </>
    ),
  },

  // Slide 9: Closing
  {
    id: 9,
    theme: 'dark',
    className: 'slide-closing',
    content: (
      <div className="closing-center">
        <h1 className="super-title">Hotel Talavera</h1>
        <p className="closing-tagline">Defined by comfort, proximity and clarity</p>
        <div className="closing-info">
          <p>Brand Book v1.0 — 2025</p>
          <a href="https://hoteltalavera.com" target="_blank" rel="noopener noreferrer" className="web-link-closing">hoteltalavera.com</a>
        </div>
      </div>
    ),
  },
];

export const navItems = [
  { label: 'Introduction', slideIndex: 0 },
  { label: 'Brand Essence', slideIndex: 1 },
  { label: 'Logo System', slideIndex: 3 },
  { label: 'Color System', slideIndex: 6 },
  { label: 'Typography', slideIndex: 4 },
  { label: 'Imagery', slideIndex: 7 },
];
