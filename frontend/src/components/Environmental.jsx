function LeafIcon() {
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
      className="lucide lucide-leaf w-5 h-5 text-emerald mt-1 flex-shrink-0"
      aria-hidden="true"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
}

const commitments = [
  'Restauración completa de tierras agrícolas tras cesar operaciones mineras',
  'Monitoreo ambiental avanzado y evaluación de impacto',
  'Prácticas de minería sostenible minimizando huella ecológica',
  'Programas de asociación comunitaria para rehabilitación de tierras',
  'Cumplimiento con estándares ambientales internacionales',
]

export default function Environmental() {
  return (
    <section
      data-testid="environmental-section"
      className="py-24 md:py-32 bg-background"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <img
              alt="Recuperación Ambiental"
              className="w-full rounded-lg"
              src="/terrain.png"
            />
            <div className="absolute top-8 left-8 z-10">
              <div className="relative">
                <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-sm bg-black/60 border border-white/10" />
                <div className="relative bg-emerald text-black px-6 py-4 rounded-sm shadow-2xl border border-black/20">
                  <div className="font-mono text-4xl font-bold">100%</div>
                  <div className="text-sm font-medium">Recuperación de Tierras</div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="overline mb-4">Sostenibilidad</p>
            <h2 className="font-outfit text-4xl md:text-5xl tracking-tight font-medium text-white mb-6">
              Compromiso Ambiental
            </h2>
            <p className="text-text-muted text-lg mb-8 leading-relaxed">
              En 4MT, la gestión ambiental es fundamental para nuestras operaciones
              mineras a cielo abierto. Estamos comprometidos con la recuperación
              completa de tierras agrícolas después de que cesen las operaciones,
              garantizando el uso sostenible del suelo y la restauración del ecosistema.
            </p>

            <ul className="space-y-4">
              {commitments.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <LeafIcon />
                  <span className="text-text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
