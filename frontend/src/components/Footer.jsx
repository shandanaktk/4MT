import { WHATSAPP_DISPLAY, WHATSAPP_URL } from '../constants/contact'

function MapPinIcon() {
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
      className="lucide lucide-map-pin w-8 h-8 text-gold mx-auto mb-3"
      aria-hidden="true"
    >
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function PhoneIcon() {
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
      className="lucide lucide-phone w-8 h-8 text-gold mx-auto mb-3"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function TrendingUpIcon() {
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
      className="lucide lucide-trending-up w-8 h-8 text-gold mx-auto mb-3"
      aria-hidden="true"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  )
}

function MessageCircleIcon({ className = 'lucide lucide-message-circle mr-3' }) {
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
      className={className}
      aria-hidden="true"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer
      data-testid="footer-section"
      className="py-24 md:py-32 bg-background border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-outfit text-4xl md:text-5xl tracking-tight font-medium text-white mb-6">
            ¿Listo para Invertir en el Futuro?
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto mb-12">
            Únete a miles de inversores asegurando su futuro con My Gold Coin
            Security Token.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
            <div className="text-center">
              <MapPinIcon />
              <h4 className="font-medium text-white mb-1">Ubicación</h4>
              <p className="text-text-muted text-sm">España (Sede Central)</p>
              <p className="text-text-muted text-sm">Operaciones en África Occidental</p>
            </div>
            <div className="text-center">
              <PhoneIcon />
              <h4 className="font-medium text-white mb-1">WhatsApp</h4>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted text-sm hover:text-gold transition-colors"
              >
                {WHATSAPP_DISPLAY}
              </a>
            </div>
            <div className="text-center">
              <TrendingUpIcon />
              <h4 className="font-medium text-white mb-1">Crecimiento</h4>
              <p className="text-text-muted text-sm">133,000% Proyectado</p>
              <p className="text-text-muted text-sm">Línea de Tiempo: 12 Años</p>
            </div>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-emerald text-white px-10 py-5 rounded-sm font-medium text-lg hover:bg-emerald/90 transition-all group"
            data-testid="footer-whatsapp-button"
          >
            <MessageCircleIcon />
            Contáctanos por WhatsApp
          </a>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-2xl font-outfit font-bold text-gold">4MT</div>
          <p className="text-text-muted text-sm">© 2024 4MT. Todos los derechos reservados.</p>
          <a
            href="https://app.emergent.sh/?utm_source=emergent-badge"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted text-sm hover:text-gold transition-colors"
          >
            Hecho con Emergent
          </a>
        </div>
      </div>
    </footer>
  )
}
