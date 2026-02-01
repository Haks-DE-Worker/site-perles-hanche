import React from 'react';

export default function Benefits() {
  const benefits = [
    {
      title: "Confiance incarnée",
      description: "Sentez votre pouvoir féminin s'éveiller à chaque mouvement. Ce bijou secret vous rappelle votre valeur, visible pour vous seule.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      title: "Sensualité sublimée",
      description: "Redécouvrez vos courbes sous un nouveau regard. L'or épouse votre silhouette avec délicatesse, révélant une féminité assumée et désirable.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Élégance discrète",
      description: "Un luxe intime qui ne crie pas, mais murmure. Portez votre raffinement comme un secret précieux, révélé seulement à ceux qui comptent.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
        </svg>
      )
    },
    {
      title: "Valeur intemporelle",
      description: "Un investissement en vous-même. L'or véritable traverse les années, comme votre beauté qui ne fait que s'affirmer avec le temps.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-neutral-50 via-amber-50/30 to-neutral-50 py-20 sm:py-28 lg:py-36 overflow-hidden">
      
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-200/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100/50 border border-amber-200/50 mb-6">
            <span className="text-xs sm:text-sm font-light text-amber-900 tracking-wider uppercase">
              Ce que vous ressentez
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-neutral-900 leading-tight mb-6">
            Plus qu'un bijou,
            <span className="block mt-2 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 bg-clip-text text-transparent font-normal">
              une renaissance
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
            Chaque femme qui porte notre chaîne de hanche témoigne d'une transformation subtile mais profonde dans sa relation à son corps.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 sm:p-10 border border-neutral-200/50 hover:border-amber-300/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-900/5 hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl"></div>
              
              <div className="flex flex-col h-full">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-100 to-amber-50 border border-amber-200/50 flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  {benefit.icon}
                </div>
                
                <h3 className="text-xl sm:text-2xl font-normal text-neutral-900 mb-4 group-hover:text-amber-900 transition-colors duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed flex-grow">
                  {benefit.description}
                </p>

                <div className="mt-6 pt-6 border-t border-neutral-200/50">
                  <div className="flex items-center gap-2 text-amber-700 text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span>Ressentir maintenant</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 sm:mt-20 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-50 to-rose-50 rounded-full border border-amber-200/30">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-300 to-amber-600 border-2 border-white"></div>
              ))}
            </div>
            <div className="text-sm text-neutral-700 font-light">
              <span className="font-normal text-amber-700">Plus de 2 800 femmes</span> vivent cette expérience chaque jour
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}