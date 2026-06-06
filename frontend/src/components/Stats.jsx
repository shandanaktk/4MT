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
      className="lucide lucide-trending-up w-8 h-8 text-gold mb-6 mx-auto md:mx-0 group-hover:scale-110 transition-transform"
      aria-hidden="true"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  )
}

function ChartColumnIcon() {
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
      className="lucide lucide-chart-column w-8 h-8 text-gold mb-6 mx-auto md:mx-0 group-hover:scale-110 transition-transform"
      aria-hidden="true"
    >
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <path d="M18 17V9" />
      <path d="M13 17V5" />
      <path d="M8 17v-3" />
    </svg>
  )
}

function GlobeIcon() {
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
      className="lucide lucide-globe w-8 h-8 text-gold mb-6 mx-auto md:mx-0 group-hover:scale-110 transition-transform"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  )
}

const stats = [
  {
    testId: 'stat-card-0',
    icon: TrendingUpIcon,
    value: '133,000%',
    label: 'Crecimiento Proyectado',
  },
  {
    testId: 'stat-card-1',
    icon: ChartColumnIcon,
    value: '12',
    label: 'Años de Trayectoria',
  },
  {
    testId: 'stat-card-2',
    icon: GlobeIcon,
    value: 'África',
    subValue: 'Occidental',
    label: 'Centro de Operaciones',
  },
]

export default function Stats() {
  return (
    <section
      data-testid="stats-section"
      className="py-24 md:py-32 bg-surface border-y border-border"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map(({ testId, icon: Icon, value, subValue, label }) => (
            <div
              key={testId}
              className="text-center md:text-left p-8 md:p-12 border border-border hover:border-gold/30 transition-all duration-500 group"
              data-testid={testId}
            >
              <Icon />
              <div className="font-mono text-5xl md:text-6xl text-gold font-bold mb-2">
                {value}
              </div>
              {subValue && (
                <div className="font-mono text-3xl md:text-4xl text-gold/70 mb-4">
                  {subValue}
                </div>
              )}
              <div className="text-text-muted text-lg">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
