interface PoweredByProps {
  isLightTheme: boolean;
}

export default function PoweredBy({ isLightTheme }: PoweredByProps) {
  return (
    <footer className={`powered-by ${isLightTheme ? 'powered-by--light' : 'powered-by--dark'}`}>
      Powered by{' '}
      <a
        href="https://polargate.ai"
        target="_blank"
        rel="noopener"
        className="powered-by__link"
      >
        Polargate
      </a>
    </footer>
  );
}
