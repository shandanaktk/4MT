function RadarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-radar w-10 h-10 text-gold"
      aria-hidden="true"
    >
      <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34" />
      <path d="M4 6h.01" />
      <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35" />
      <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67" />
      <path d="M12 18h.01" />
      <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67" />
      <circle cx="12" cy="12" r="2" />
      <path d="m13.41 10.59 5.66-5.66" />
    </svg>
  )
}

export default function Partners() {
  return (
    <section data-testid="partners-section" className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="overline mb-4">Colaboradores</p>
          <h2 className="font-outfit text-4xl md:text-5xl tracking-tight font-medium text-white">
            Socios Estratégicos
          </h2>
          <p className="text-text-muted text-lg mt-4">
            Colaborando con proveedores de tecnología líderes a nivel mundial.
          </p>
        </div>

        <div className="bg-surface-glass backdrop-blur-xl border border-border rounded-lg p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <RadarIcon />
            <div>
              <h3 className="font-outfit text-2xl font-medium text-white">
                Tecnología de Radar de Suelo Profundo
              </h3>
              <p className="text-gold">El Sistema de Detección Más Avanzado del Mundo</p>
            </div>
          </div>
          <p className="text-text-muted leading-relaxed">
            Nuestro socio estratégico proporciona la tecnología de radar de suelo
            profundo más avanzada del mundo, previamente involucrada en la
            recuperación del Titanic. Esta asociación garantiza capacidades de
            expansión ilimitadas e identificación precisa de recursos para nuestras
            operaciones mineras.
          </p>
        </div>
      </div>
    </section>
  )
}
