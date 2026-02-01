import React, { useState } from 'react';

export default function CTA() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative bg-gradient-to-b from-amber-50/30 via-rose-50/20 to-neutral-50 py-20 sm:py-28 lg:py-36 overflow-hidden">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-gradient-to-br from-amber-200/10 via-rose-200/10 to-transparent rounded-full blur-3xl"></div>

      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100/60 border border-amber-200/50 backdrop-blur-sm mb-8">
          <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
          <span className="text-xs sm:text-sm font-light text-amber-900 tracking-wider uppercase">
            Seulement 47 pièces restantes
          </span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-neutral-900 leading-tight mb-6">
          Ne passez plus
          <span className="block mt-2 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 bg-clip-text text-transparent font-normal">
            à côté de vous-même
          </span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-neutral-600 font-light leading-relaxed max-w-2xl mx-auto mb-12">
          Chaque jour, des femmes choisissent de célébrer leur féminité avec notre chaîne de hanche. Rejoignez-les et découvrez la sensation d'une élégance qui ne se voit pas, mais se ressent intensément.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center mb-12">
          <button
          //redirect on whatsapp with prefilled message
          onClick={() => window.open("https://wa.me/2290159522706?text=Bonjour,%20je%20suis%20intéressé(e)%20par%20votre%20chaîne%20de%20hanche.%20Pourriez-vous%20me%20fournir%20plus%20d'informations%20?", "_blank")}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative w-full sm:w-auto px-12 py-6 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-normal text-base sm:text-lg rounded-full overflow-hidden shadow-2xl shadow-amber-900/30 hover:shadow-amber-900/60 transition-all duration-500 hover:scale-105"
          >
            <a className="relative z-10 flex items-center justify-center gap-3">
              Commander maintenant
              <svg 
                className={`w-5 h-5 transition-transform duration-500 ${isHovered ? 'translate-x-1' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>

          <a 
          href="#collection"
          className="group w-full sm:w-auto px-10 py-6 text-neutral-700 font-light text-base sm:text-lg rounded-full border-2 border-neutral-300 hover:border-amber-500/50 hover:bg-amber-50/50 transition-all duration-300 flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Voir la galerie
          </a>
        </div>

        {/* <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto pt-8 border-t border-neutral-200">
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-100 to-amber-50 border border-amber-200/50 flex items-center justify-center">
              <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-sm text-neutral-700 font-light">Livraison offerte</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-100 to-amber-50 border border-amber-200/50 flex items-center justify-center">
              <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <p className="text-sm text-neutral-700 font-light">Garantie 2 ans</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-100 to-amber-50 border border-amber-200/50 flex items-center justify-center">
              <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-sm text-neutral-700 font-light">Paiement sécurisé</p>
          </div>
        </div> */}

        <div className="mt-12 p-6 bg-gradient-to-r from-amber-50/50 via-rose-50/30 to-amber-50/50 rounded-2xl border border-amber-200/30">
          <p className="text-sm text-neutral-600 font-light">
            <span className="font-normal text-amber-800">2 847 femmes</span> ont déjà fait le choix de s'honorer. 
            <span className="block mt-1">Choisissez d'être la prochaine</span>
          </p>
        </div>

      </div>
    </section>
  );
}