import { WHATSAPP_URL } from '../constants/contact'

function CheckIcon() {
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
      className="lucide lucide-check w-5 h-5 text-emerald mt-1 flex-shrink-0"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

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

const benefits = [
  'Totalmente respaldado por activos mineros físicos (oro, diamantes, tierras raras)',
  'Un token de seguridad = Una acción en operaciones 4MT',
  'Propiedad y autenticidad verificadas por blockchain',
  'Crecimiento proyectado del 133,000% en 12 años',
  'Cumple con regulaciones de valores EU/US',
  'Activo digital líquido y negociable',
]

const tokenDetails = [
  { label: 'Token de Seguridad', value: 'My Gold Coin', valueClass: 'font-outfit font-medium text-gold' },
  { label: 'Respaldado por', value: 'Canasta de Activos Mineros', valueClass: 'font-outfit font-medium text-white' },
  { label: 'Potencial de Crecimiento', value: '133,000%', valueClass: 'font-mono font-bold text-gold' },
  { label: 'Una Acción Por', value: 'Unidad', valueClass: 'font-outfit font-medium text-white', last: true },
]

export default function SecurityToken() {
  return (
    <section
      id="token"
      data-testid="security-token-section"
      className="py-24 md:py-32 bg-surface"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="overline mb-4">Token de Seguridad</p>
            <h2 className="font-outfit text-4xl md:text-5xl tracking-tight font-medium text-white mb-6">
              My Gold Coin
            </h2>
            <p className="text-text-muted text-lg mb-8 leading-relaxed">
              Una acción por unidad, totalmente respaldada por nuestra canasta
              diversificada de activos mineros. Oportunidad de inversión accesible
              para inversores cotidianos que buscan exposición a la industria minera.
            </p>

            <ul className="space-y-4 mb-10">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-text-muted">{benefit}</span>
                </li>
              ))}
            </ul>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gold text-black px-8 py-4 rounded-sm font-medium hover:bg-gold-hover transition-all group"
              data-testid="token-invest-button"
            >
              Invertir Ahora
              <ArrowRightIcon />
            </a>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-surface-glass backdrop-blur-xl border border-border rounded-lg p-8 md:p-12">
              <img
                alt="My Gold Coin Token"
                className="w-full rounded-lg mb-8"
                src="/coin.png"
              />

              <div className="space-y-6">
                {tokenDetails.map(({ label, value, valueClass, last }) => (
                  <div
                    key={label}
                    className={`flex justify-between items-center ${last ? '' : 'border-b border-border pb-4'}`}
                  >
                    <span className="text-text-muted">{label}</span>
                    <span className={valueClass}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -inset-4 bg-gold/5 blur-3xl rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
