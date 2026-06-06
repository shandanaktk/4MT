import { WHATSAPP_URL } from '../constants/contact'

function MenuIcon() {
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
      className="lucide lucide-menu"
      aria-hidden="true"
    >
      <path d="M4 12h16" />
      <path d="M4 18h16" />
      <path d="M4 6h16" />
    </svg>
  )
}

export default function Navbar() {
  return (
    <nav
      data-testid="main-navigation"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-black/80 backdrop-blur-2xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          <a
            href="#"
            className="text-2xl font-outfit font-bold text-gold"
            data-testid="logo-link"
          >
            4MT
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#operaciones"
              className="text-text-muted hover:text-gold transition-colors"
            >
              Operaciones
            </a>
            <a
              href="#token"
              className="text-text-muted hover:text-gold transition-colors"
            >
              Token
            </a>
            <a
              href="#equipo"
              className="text-text-muted hover:text-gold transition-colors"
            >
              Equipo
            </a>
            <a
              href="#minetrace"
              className="text-text-muted hover:text-gold transition-colors"
            >
              MineTrace
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-black px-6 py-2.5 rounded-sm font-medium hover:bg-gold-hover transition-colors"
              data-testid="nav-whatsapp-button"
            >
              Contactar
            </a>
          </div>

          <button
            type="button"
            className="md:hidden text-white"
            data-testid="mobile-menu-button"
            aria-label="Open menu"
          >
            <MenuIcon />
          </button>
        </div>
      </div>
    </nav>
  )
}
