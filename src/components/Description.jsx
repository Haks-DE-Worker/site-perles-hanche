import React from 'react';

export default function Description() {
  return (
    <section className="relative bg-gradient-to-b from-amber-50/30 via-neutral-50 to-amber-50/30 py-20 sm:py-28 lg:py-36 overflow-hidden">
      
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-amber-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-rose-200/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
            <div className="w-2 h-2 rounded-full bg-amber-400"></div>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-neutral-900 leading-tight max-w-3xl mx-auto">
            Un bijou qui murmure
            <span className="block mt-2 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 bg-clip-text text-transparent font-normal">
              votre vérité intime
            </span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-8 sm:space-y-10">
          
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-amber-400 via-amber-300 to-transparent rounded-full"></div>
            <p className="text-base sm:text-lg md:text-xl text-neutral-700 font-light leading-relaxed pl-6">
              Il y a des bijoux que l'on porte pour être vue. Et puis il y a ceux que l'on porte pour
              <span className="italic text-amber-800 font-normal"> se sentir vivante</span>.
            </p>
          </div>

          <p className="text-base sm:text-lg text-neutral-600 font-light leading-loose">
            Notre chaîne de hanche n'est pas un simple accessoire. C'est un rituel matinal, un secret porté contre la peau, une caresse dorée qui épouse vos courbes avec une délicatesse infinie. Chaque mouvement devient une danse silencieuse, chaque regard dans le miroir une célébration de votre féminité.
          </p>

          <div className="relative bg-gradient-to-br from-amber-50 to-rose-50 rounded-2xl p-8 sm:p-10 border border-amber-200/30">
            <div className="absolute top-4 left-4 text-6xl text-amber-300/20 font-serif">"</div>
            <blockquote className="relative text-base sm:text-lg text-neutral-700 font-light leading-relaxed italic text-center">
              Ce n'est pas le bijou qui vous transforme. C'est la femme que vous devenez en le portant.
            </blockquote>
            <div className="mt-6 text-center">
              <div className="inline-flex items-center gap-2">
                <div className="w-8 h-px bg-amber-400"></div>
                <span className="text-xs sm:text-sm text-amber-800 font-light tracking-widest uppercase">Notre vision</span>
                <div className="w-8 h-px bg-amber-400"></div>
              </div>
            </div>
          </div>

          {/* <p className="text-base sm:text-lg text-neutral-600 font-light leading-loose">
            Sculpté dans de l'or 18 carats par des mains expertes, ce bijou respecte l'art ancestral de la joaillerie tout en célébrant la modernité de votre féminité. Chaque maillon est pensé pour s'adapter à votre morphologie unique, pour vous accompagner dans vos moments de force comme dans vos instants de douceur.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 py-8">
            <div className="group relative bg-white/60 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-neutral-200/50 hover:border-amber-300/50 transition-all duration-500">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-100 to-amber-50 border border-amber-200/50 flex items-center justify-center text-amber-600 mb-4 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-normal text-neutral-900 mb-2">Héritage intemporel</h3>
              <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
                Un bijou conçu pour traverser les années, se transmettre, raconter votre histoire.
              </p>
            </div>

            <div className="group relative bg-white/60 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-neutral-200/50 hover:border-amber-300/50 transition-all duration-500">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-100 to-amber-50 border border-amber-200/50 flex items-center justify-center text-amber-600 mb-4 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-normal text-neutral-900 mb-2">Savoir-faire artisanal</h3>
              <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
                Chaque pièce est façonnée à la main avec une précision millimétrique et un soin absolu.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-4 top-0 w-1 h-full bg-gradient-to-b from-amber-400 via-amber-300 to-transparent rounded-full"></div>
            <p className="text-base sm:text-lg md:text-xl text-neutral-700 font-light leading-relaxed pr-6 text-right">
              Porter cette chaîne, c'est choisir de
              <span className="italic text-amber-800 font-normal"> s'honorer soi-même</span>, 
              dans le secret de votre intimité.
            </p>
          </div> */}

        </div>

        {/* <div className="mt-16 sm:mt-20 text-center">
          <div className="inline-flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-amber-400 animate-pulse"></div>
              <span className="text-xs sm:text-sm text-neutral-500 font-light tracking-widest uppercase">
                Chaque commande inclut
              </span>
              <div className="w-3 h-3 rounded-full bg-amber-400 animate-pulse"></div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-neutral-600 font-light">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Écrin premium
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Certificat d'authenticité
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Guide d'entretien
              </span>
            </div>
          </div>
        </div> */}

      </div>
    </section>
  );
}