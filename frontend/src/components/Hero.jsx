function ChevronRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-chevron-right ml-2 group-hover:translate-x-1 transition-transform"
      aria-hidden="true"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section
      data-testid="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero.jpg)' }}
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-40">
        <div className="max-w-4xl">
          <p className="overline mb-6 animate-fade-in">
            Minería a Cielo Abierto &amp; Tecnología Blockchain
          </p>

          <h1 className="font-outfit text-5xl md:text-7xl font-light tracking-tighter text-white mb-8 leading-[1.1] animate-slide-up">
            Minería Sostenible
            <br />
            <span className="text-gold">Innovación Blockchain</span>
          </h1>

          <p className="text-xl md:text-2xl text-text-muted max-w-2xl mb-12 leading-relaxed animate-slide-up-delay">
            4MT opera minería a cielo abierto de oro, diamantes y tierras raras
            en África Occidental, pioneros en plataformas de rastreo y
            certificación blockchain conformes con regulaciones EU/US.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up-delay-2">
            <a
              href="#token"
              className="inline-flex items-center justify-center bg-gold text-black px-8 py-4 rounded-sm font-medium hover:bg-gold-hover transition-all group"
              data-testid="hero-invest-button"
            >
              Invertir en My Gold Coin
              <ChevronRightIcon />
            </a>
            <a
              href="#operaciones"
              className="inline-flex items-center justify-center border border-gold text-gold px-8 py-4 rounded-sm font-medium hover:bg-gold/10 transition-all"
              data-testid="hero-learn-more-button"
            >
              Conocer Más
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-scroll-indicator" />
        </div>
      </div>
    </section>
  )
}
