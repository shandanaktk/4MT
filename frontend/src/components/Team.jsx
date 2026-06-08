function MapPinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-map-pin"
      aria-hidden="true"
    >
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function UserIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-text-muted/40"
      aria-hidden="true"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

const teamMembers = [
  {
    testId: 'team-member-0',
    name: 'Horst G. Ludwig',
    role: 'Director General',
    location: 'Alemania',
    photo: '/horst.png',
  },
  {
    testId: 'team-member-1',
    name: 'Manuel Pérez Sánchez',
    role: 'Director de Operaciones',
    location: 'España',
    photo: '/manuel.jpeg',
  },
  {
    testId: 'team-member-2',
    name: 'Jose Antonio Fresneda Cobos',
    role: 'Secretario de la Empresa',
    location: 'España',
    photo: null,
  },
  {
    testId: 'team-member-3',
    name: 'Nicolas Hahn',
    role: 'Embajador (Alemania/Francia)',
    location: 'Europa',
    photo: null,
  },
]

function TeamMemberPhoto({ name, photo }) {
  return (
    <div className="relative overflow-hidden rounded-lg mb-6">
      {photo ? (
        <img
          alt={name}
          className="w-full aspect-[3/4] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          src={photo}
        />
      ) : (
        <div className="w-full aspect-[3/4] bg-background border border-border flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500">
          <UserIcon />
        </div>
      )}
      <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-all duration-500" />
    </div>
  )
}

export default function Team() {
  return (
    <section
      id="equipo"
      data-testid="team-section"
      className="py-24 md:py-32 bg-surface"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="overline mb-4">Liderazgo</p>
          <h2 className="font-outfit text-4xl md:text-5xl tracking-tight font-medium text-white">
            Equipo Directivo
          </h2>
          <p className="text-text-muted text-lg mt-4 max-w-2xl mx-auto">
            Expertos de la industria impulsando la innovación en minería sostenible
            y tecnología blockchain.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map(({ testId, name, role, location, photo }) => (
            <div key={testId} className="group text-center" data-testid={testId}>
              <TeamMemberPhoto name={name} photo={photo} />
              <h3 className="font-outfit text-xl font-medium text-white mb-1">
                {name}
              </h3>
              <p className="text-gold mb-1">{role}</p>
              <p className="text-text-muted text-sm flex items-center justify-center gap-1">
                <MapPinIcon />
                {location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
