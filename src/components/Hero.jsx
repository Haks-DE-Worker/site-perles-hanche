import React, { useState } from 'react';

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 bg-gradient-radial from-amber-900/5 via-transparent to-transparent"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-amber-600/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-rose-900/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-8rem)]">
          
          {/* Left: Content */}
          <div className="space-y-8 sm:space-y-10 text-center lg:text-left order-2 lg:order-1">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-950/30 border border-amber-700/20 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
              <span className="text-xs sm:text-sm font-light text-amber-200/90 tracking-wider uppercase">
                Édition Limitée
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight tracking-tight">
                Révélez votre
                <span className="block mt-2 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent font-normal">
                  sensualité sacrée
                </span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                Une chaîne de hanche sculptée dans l'or fin, conçue pour célébrer chaque courbe de votre féminité avec une élégance intemporelle.
              </p>
            </div>

            {/* Value props */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-neutral-400">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-light">Or 18 carats</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-light">Fait main</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-light">Ajustable</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center lg:justify-start pt-4">
              <button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-normal text-base sm:text-lg rounded-full overflow-hidden shadow-2xl shadow-amber-900/50 hover:shadow-amber-900/80 transition-all duration-500 hover:scale-105"
              >
                <a href="#collection" className="relative z-10 flex items-center justify-center gap-3">
                  Découvrir la collection
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

              <button className="group w-full sm:w-auto px-8 py-5 text-neutral-300 font-light text-base sm:text-lg rounded-full border border-neutral-700 hover:border-amber-600/50 hover:bg-neutral-900/50 transition-all duration-300 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Voir en vidéo
              </button>
            </div>

            {/* Social proof micro */}
            <div className="flex items-center gap-3 justify-center lg:justify-start pt-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-300 to-amber-600 border-2 border-neutral-950"></div>
                ))}
              </div>
              <div className="text-xs sm:text-sm text-neutral-400 font-light">
                <span className="text-amber-400 font-normal">2,847</span> femmes portent déjà leur confidence
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative order-1 lg:order-2">
            <div className="relative aspect-square max-w-lg mx-auto">
              
              {/* Glow effect behind */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 via-rose-600/10 to-amber-600/20 rounded-full blur-3xl animate-pulse"></div>
              
              {/* Main image container */}
              <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-900 shadow-2xl ring-1 ring-amber-500/10">
                
                {/* Image */}
                <img 
                  src="images/chaine1.jfif"
                  alt="Femme élégante portant une chaîne de hanche en or"
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Elegant gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-neutral-950/20"></div>

                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-amber-500/30 rounded-tl-3xl"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-amber-500/30 rounded-br-3xl"></div>
              </div>

              {/* Floating price tag */}
              <div className="absolute -bottom-4 -right-4 bg-neutral-950 border border-amber-600/30 rounded-2xl px-6 py-4 shadow-2xl backdrop-blur-sm">
                <div className="text-xs text-neutral-500 font-light uppercase tracking-wider mb-1">À partir de</div>
                <div className="text-2xl sm:text-3xl font-light text-amber-400">€387</div>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-neutral-600 font-light tracking-wider uppercase">Défiler</span>
          <svg className="w-6 h-6 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}