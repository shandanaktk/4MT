import { WHATSAPP_URL } from '../constants/contact'

function MessageCircleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-message-circle"
      aria-hidden="true"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  )
}

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-emerald text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
      data-testid="floating-whatsapp-button"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircleIcon />
    </a>
  )
}
