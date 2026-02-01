import React, { useState } from 'react';

export default function ProductShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const showcaseItems = [
    {
      image: "/images/chaine2.jfif",
      label: "Vue de profil",
      subtitle: "Délicatesse absolue"
    },
    {
      image: "/images/chaine1.jfif",
      label: "Détails dorés",
      subtitle: "Or 18 carats"
    },
    {
      image: "/images/chaine5.webp",
      label: "Port naturel",
      subtitle: "Ajustable à l'infini"
    },
    {
      image: "/images/chaine4.webp",
      label: "Finitions précieuses",
      subtitle: "Fait main"
    }
  ];

  return (
    <section id="collection" className="relative bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 py-20 sm:py-28 lg:py-36 overflow-hidden">
      
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-900/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-rose-900/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 lg:mb-24">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
            <span className="text-xs sm:text-sm font-light text-amber-400 tracking-widest uppercase">
              Savoir-faire d'exception
            </span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6">
            Chaque détail
            <span className="block mt-2 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent font-normal">
              raconte une histoire
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
            Découvrez la finesse d'un bijou pensé pour sublimer votre silhouette avec grâce et authenticité.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-16">
          {showcaseItems.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative aspect-[4/5] rounded-3xl overflow-hidden bg-neutral-800 cursor-pointer"

            >
              <img 
                src={item.image}
                alt={item.label}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
              
              <div className={`absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/40 to-transparent transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-100' : 'opacity-60'}`}></div>
              
              <div className="absolute inset-0 border border-amber-500/0 group-hover:border-amber-500/30 transition-all duration-500 rounded-3xl"></div>
              
              <div className="absolute top-6 left-6 right-6">
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-950/40 backdrop-blur-md border border-amber-500/20 transition-all duration-500 ${hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></div>
                  <span className="text-xs text-amber-200 font-light tracking-wide uppercase">
                    {item.subtitle}
                  </span>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className={`transition-all duration-500 ${hoveredIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                  <div className="w-16 h-px bg-gradient-to-r from-amber-400 to-transparent mb-4"></div>
                  <h3 className="text-xl sm:text-2xl font-light text-white mb-2">
                    {item.label}
                  </h3>
                  <div className="flex items-center gap-2 text-amber-400 text-sm font-light">
                    <span>Explorer</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="absolute top-0 left-0 w-20 h-20 border-t border-l border-amber-500/20 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-amber-500/20 rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 max-w-4xl mx-auto pt-12 border-t border-neutral-800">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-light text-amber-400 mb-2">18K</div>
            <div className="text-xs sm:text-sm text-neutral-500 font-light uppercase tracking-wider">Or véritable</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-light text-amber-400 mb-2">100%</div>
            <div className="text-xs sm:text-sm text-neutral-500 font-light uppercase tracking-wider">Fait main</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-light text-amber-400 mb-2">∞</div>
            <div className="text-xs sm:text-sm text-neutral-500 font-light uppercase tracking-wider">Ajustable</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-light text-amber-400 mb-2">2A</div>
            <div className="text-xs sm:text-sm text-neutral-500 font-light uppercase tracking-wider">Garantie</div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="group inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-normal text-sm sm:text-base rounded-full shadow-2xl shadow-amber-900/50 hover:shadow-amber-900/80 transition-all duration-500 hover:scale-105">
            <span>Voir toute la collection</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}