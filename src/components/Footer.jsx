import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-neutral-950 via-neutral-900 to-black overflow-hidden">
      
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-900/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-900/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="py-16 sm:py-20 lg:py-24 border-b border-neutral-800">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-600 to-amber-400 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-light text-white">Chaîne de Hanche</h3>
              </div>
              
              <p className="text-base text-neutral-400 font-light leading-relaxed max-w-md">
                Révélez votre sensualité sacrée avec nos bijoux d'exception, façonnés à la main dans de l'or 18 carats.
              </p>

              <div className="pt-4">
                <p className="text-sm text-neutral-500 font-light mb-3">Suivez notre univers</p>
                <div className="flex gap-4">
                  <a href="#" className="group w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700 hover:border-amber-500/50 hover:bg-neutral-900 flex items-center justify-center transition-all duration-300">
                    <svg className="w-5 h-5 text-neutral-400 group-hover:text-amber-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="group w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700 hover:border-amber-500/50 hover:bg-neutral-900 flex items-center justify-center transition-all duration-300">
                    <svg className="w-5 h-5 text-neutral-400 group-hover:text-amber-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="group w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700 hover:border-amber-500/50 hover:bg-neutral-900 flex items-center justify-center transition-all duration-300">
                    <svg className="w-5 h-5 text-neutral-400 group-hover:text-amber-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 sm:gap-12">
              <div>
                <h4 className="text-sm font-normal text-white mb-4 uppercase tracking-wider">Navigation</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-sm text-neutral-400 font-light hover:text-amber-400 transition-colors duration-300">Collection</a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-neutral-400 font-light hover:text-amber-400 transition-colors duration-300">Notre Histoire</a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-neutral-400 font-light hover:text-amber-400 transition-colors duration-300">Témoignages</a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-neutral-400 font-light hover:text-amber-400 transition-colors duration-300">Blog</a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-normal text-white mb-4 uppercase tracking-wider">Support</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-sm text-neutral-400 font-light hover:text-amber-400 transition-colors duration-300">Contact</a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-neutral-400 font-light hover:text-amber-400 transition-colors duration-300">FAQ</a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-neutral-400 font-light hover:text-amber-400 transition-colors duration-300">Livraison</a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-neutral-400 font-light hover:text-amber-400 transition-colors duration-300">Retours</a>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          <div className="mt-12 p-6 sm:p-8 bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-2xl border border-neutral-800">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-600 to-green-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-neutral-400 font-light mb-1">Une question ? Contactez-nous</p>
                  <a href="https://wa.me/2290159522706" className="text-lg text-amber-400 font-normal hover:text-amber-300 transition-colors duration-300">
                    +229 01 59 52 27 06
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-500 font-light">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Disponible 7j/7</span>
              </div>
            </div>
          </div>
        </div>

        <div className="py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500 font-light">
            <p>© {currentYear} Chaîne de Hanche. Tous droits réservés.</p>
            <div className="flex flex-wrap items-center gap-6">
              <a href="#" className="hover:text-amber-400 transition-colors duration-300">Mentions légales</a>
              <a href="#" className="hover:text-amber-400 transition-colors duration-300">Politique de confidentialité</a>
              <a href="#" className="hover:text-amber-400 transition-colors duration-300">CGV</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}