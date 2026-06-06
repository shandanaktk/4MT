import { WHATSAPP_URL } from '../constants/contact'

function ArrowRightIcon() {
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
      className="lucide lucide-arrow-right ml-2 group-hover:translate-x-1 transition-transform"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

const stats = [
  { testId: 'minetrace-stat-0', value: '12+', label: 'Envíos Activos' },
  { testId: 'minetrace-stat-1', value: '20+', label: 'Minerales Rastreados' },
  { testId: 'minetrace-stat-2', value: '94.2%', label: 'Tasa de Cumplimiento' },
  { testId: 'minetrace-stat-3', value: '28', label: 'Países' },
]

export default function MineTrace() {
  return (
    <section
      id="minetrace"
      data-testid="minetrace-section"
      className="py-24 md:py-32 bg-background"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-surface-glass backdrop-blur-2xl border border-white/10 rounded-lg p-8 md:p-16">
          <div className="text-center mb-12">
            <p className="overline mb-4">Plataforma en Vivo</p>
            <h2 className="font-outfit text-4xl md:text-5xl tracking-tight font-medium text-white mb-4">
              Plataforma de Certificación MineTrace
            </h2>
            <p className="text-text-muted text-lg max-w-3xl mx-auto">
              Rastrea, sigue y certifica cada mineral desde la extracción hasta la
              entrega. Monitoreo de cumplimiento en tiempo real con verificación
              blockchain para total transparencia en la cadena de suministro.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12">
            {stats.map(({ testId, value, label }) => (
              <div key={testId} className="text-center" data-testid={testId}>
                <div className="font-mono text-4xl md:text-5xl text-gold font-bold mb-2">
                  {value}
                </div>
                <div className="text-text-muted text-sm md:text-base">{label}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gold text-black px-8 py-4 rounded-sm font-medium hover:bg-gold-hover transition-all group"
              data-testid="minetrace-access-button"
            >
              Acceder a Plataforma MineTrace
              <ArrowRightIcon />
            </a>
            <p className="text-text-muted text-sm mt-4">
              Total transparencia • Cumplimiento EU/US • Verificado por Blockchain
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
