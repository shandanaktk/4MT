const YOUTUBE_EMBED_URL = 'https://www.youtube.com/embed/W_Zsn6XrBQM'

export default function AssetRevolution() {
  return (
    <section
      id="rwa-revolution"
      data-testid="asset-revolution-section"
      className="py-24 md:py-32 bg-surface"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="relative">
          <div className="absolute -inset-8 md:-inset-12 bg-gold/5 blur-3xl rounded-full pointer-events-none" />

          <div className="relative bg-surface-glass backdrop-blur-2xl border border-white/10 rounded-lg p-8 md:p-12 lg:p-16">
            <div className="text-center mb-10 md:mb-12 max-w-4xl mx-auto">
              <p className="overline mb-4">Real-World Assets</p>
              <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl tracking-tight font-medium text-white mb-4 leading-tight">
                The Real-World Asset Revolution
              </h2>
              <p className="font-outfit text-xl md:text-2xl text-gold font-medium mb-6">
                4MT MyGoldCoinSecurityToken
              </p>
              <p className="text-text-muted text-lg leading-relaxed">
                Descubre cómo 4MT está transformando la minería sostenible en
                activos digitales respaldados por oro, diamantes y tierras raras —
                con transparencia blockchain y cumplimiento regulatorio EU/US.
              </p>
            </div>

            <div className="relative max-w-5xl mx-auto">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-br from-gold/30 via-gold/10 to-transparent opacity-60 pointer-events-none" />
              <div className="relative rounded-lg overflow-hidden border border-border shadow-2xl shadow-black/40 bg-black">
                <div className="relative w-full aspect-video">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={YOUTUBE_EMBED_URL}
                    title="The Real-World Asset Revolution | 4MT MyGoldCoinSecurityToken"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <p className="text-text-muted text-sm text-center mt-6 md:mt-8">
              Token de seguridad respaldado por activos mineros físicos • Verificado por blockchain
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
