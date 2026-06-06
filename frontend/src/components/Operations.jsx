function GemIcon() {
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
      className="lucide lucide-gem w-10 h-10 text-gold mb-4"
      aria-hidden="true"
    >
      <path d="M6 3h12l4 6-10 13L2 9Z" />
      <path d="M11 3 8 9l4 13 4-13-3-6" />
      <path d="M2 9h20" />
    </svg>
  )
}

function ShieldIcon() {
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
      className="lucide lucide-shield w-10 h-10 text-gold mb-4"
      aria-hidden="true"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  )
}

function CoinsIcon() {
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
      className="lucide lucide-coins w-10 h-10 text-gold mb-4"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="6" />
      <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
      <path d="M7 6h1v4" />
      <path d="m16.71 13.88.7.71-2.82 2.82" />
    </svg>
  )
}

const operations = [
  {
    testId: 'operation-card-0',
    image: '/card1.jpeg',
    alt: 'Minería de Oro y Diamantes',
    icon: GemIcon,
    title: 'Minería de Oro y Diamantes',
    description:
      'Operaciones avanzadas de extracción a cielo abierto en África Occidental produciendo oro, diamantes y tierras raras de alta calidad con tecnología minera de vanguardia.',
  },
  {
    testId: 'operation-card-1',
    image: '/card2.jpg',
    alt: 'Plataforma MineTrace',
    icon: ShieldIcon,
    title: 'Plataforma MineTrace',
    description:
      'Plataforma revolucionaria de rastreo, seguimiento y certificación basada en blockchain que garantiza total transparencia en la cadena de suministro y cumplimiento regulatorio EU/US.',
  },
  {
    testId: 'operation-card-2',
    image: '/card3.jpeg',
    alt: 'Elementos de Tierras Raras',
    icon: CoinsIcon,
    title: 'Elementos de Tierras Raras',
    description:
      'Extracción especializada a cielo abierto de elementos críticos de tierras raras esenciales para la tecnología moderna, con transparencia certificada y prácticas sostenibles.',
  },
]

export default function Operations() {
  return (
    <section
      id="operaciones"
      data-testid="operations-section"
      className="py-24 md:py-32 bg-background"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <p className="overline mb-4">Nuestras Operaciones</p>
          <h2 className="font-outfit text-4xl md:text-5xl tracking-tight font-medium text-white">
            Operaciones Mineras a Cielo Abierto
          </h2>
          <p className="text-text-muted text-lg mt-4 max-w-2xl">
            Soluciones avanzadas de minería a cielo abierto en África Occidental
            con tecnología de extracción de superficie de vanguardia y prácticas
            sostenibles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {operations.map(({ testId, image, alt, icon: Icon, title, description }) => (
            <div
              key={testId}
              className="group relative overflow-hidden border border-border hover:border-gold/30 transition-all duration-500"
              data-testid={testId}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  alt={alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src={image}
                />
              </div>
              <div className="p-8">
                <Icon />
                <h3 className="font-outfit text-2xl font-medium text-white mb-3">
                  {title}
                </h3>
                <p className="text-text-muted leading-relaxed">{description}</p>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/20 transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
