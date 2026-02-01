import React, { useState } from 'react';

export default function Pricing() {
  const [selectedOption, setSelectedOption] = useState(1);

  const pricingOptions = [
    {
      name: "Or Rose 18K",
      price: "5000",
      oldPrice: "8900",
      badge: "Populaire",
      features: [
        "Or rose 18 carats certifié",
        "Ajustable de 85 à 105 cm",
        "Fermoir sécurisé premium",
        "Écrin de luxe inclus",
        "Certificat d'authenticité",
        "Garantie 2 ans"
      ]
    },
    {
      name: "Or Jaune 18K",
      price: "5000",
      oldPrice: "8900",
      badge: "Édition limitée",
      features: [
        "Or jaune 18 carats certifié",
        "Ajustable de 85 à 105 cm",
        "Fermoir sécurisé premium",
        "Écrin de luxe inclus",
        "Certificat d'authenticité",
        "Garantie 2 ans"
      ]
    },
    {
      name: "Or Blanc 18K",
      price: "12000",
      oldPrice: "19200",
      badge: "Exclusif",
      features: [
        "Or blanc 18 carats certifié",
        "Ajustable de 85 à 105 cm",
        "Fermoir sécurisé premium",
        "Écrin de luxe inclus",
        "Certificat d'authenticité",
        "Garantie 2 ans"
      ]
    }
  ];

//   function to redirect on whatsaapp with prefilled message
const redirectToWhatsApp = (option) => {

  const message = option?`Bonjour, je suis intéressé(e) par l'option de prix : ${option.name} au prix de ${option.price} FCFA. Pourriez-vous me fournir plus d'informations ?` : "Bonjour, je suis intéressé(e) par vos options de prix. Pourriez-vous me fournir plus d'informations ?";
  const phoneNumber = "2290159522706"; // Replace with your phone number
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};

  return (
    <section className="relative bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 py-20 sm:py-28 lg:py-36 overflow-hidden">
      
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-900/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-900/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-950/30 border border-amber-700/20 backdrop-blur-sm mb-6">
            <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
            <span className="text-xs sm:text-sm font-light text-amber-200/90 tracking-wider uppercase">
              Offre limitée - Stock restant : 47 pièces
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6">
            Investissez dans
            <span className="block mt-2 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent font-normal">
              votre élégance
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
            Un bijou rare, façonné pour vous. Chaque pièce est unique et produite en quantité limitée.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {pricingOptions.map((option, index) => (
            <div
              key={index}
              onClick={() => setSelectedOption(index)}
              className={`group relative bg-gradient-to-b from-neutral-900 to-neutral-950 rounded-3xl p-8 sm:p-10 border cursor-pointer transition-all duration-500 hover:-translate-y-2 ${
                selectedOption === index 
                  ? 'border-amber-500/50 shadow-2xl shadow-amber-900/20' 
                  : 'border-neutral-800 hover:border-amber-700/30'
              }`}
            >
              {option.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="px-4 py-1.5 bg-gradient-to-r from-amber-600 to-amber-500 text-white text-xs font-light tracking-wider uppercase rounded-full shadow-lg">
                    {option.badge}
                  </div>
                </div>
              )}

              <div className={`absolute inset-0 rounded-3xl transition-opacity duration-500 ${
                selectedOption === index ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600/5 via-transparent to-rose-600/5 rounded-3xl"></div>
              </div>

              <div className="relative">
                <h3 className="text-2xl sm:text-3xl font-light text-white mb-2">{option.name}</h3>
                
                <div className="flex items-baseline gap-3 mb-6">
                  <div className="flex items-start">
                    {/* <span className="text-base text-amber-400 font-light mt-2">€</span> */}
                    <span className="text-5xl sm:text-6xl font-light text-amber-400">{option.price} <span className='text-xl' >FCFA</span> </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-neutral-500 line-through">{option.oldPrice}<span className='text-sm' >FCFA</span></span>
                    <span className="text-xs text-amber-500 font-light">-22% aujourd'hui</span>
                  </div>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-6"></div>

                <ul className="space-y-4 mb-8">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-neutral-300 font-light">
                      <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-full font-normal text-base transition-all duration-500 ${
                  selectedOption === index
                    ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-white shadow-xl shadow-amber-900/50 hover:shadow-amber-900/80 hover:scale-105'
                    : 'bg-neutral-800 text-neutral-300 border border-neutral-700 hover:border-amber-600/50 hover:bg-neutral-900/50'
                }`}
                    onClick={() => redirectToWhatsApp(option)}
                >
                  {selectedOption === index ? 'Sélectionné' : 'Choisir cette option'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-2xl p-8 sm:p-10 border border-amber-700/20 mb-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-light text-white mb-4">
                Prête à révéler votre sensualité ?
              </h3>
              <p className="text-base text-neutral-400 font-light">
                Commandez maintenant et recevez votre bijou dans un écrin luxueux sous 3 à 5 jours ouvrés.
              </p>
            </div>

            <button 
            onClick={() => redirectToWhatsApp()}
            className="group w-full py-5 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-normal text-lg rounded-full shadow-2xl shadow-amber-900/50 hover:shadow-amber-900/80 transition-all duration-500 hover:scale-105 flex items-center justify-center gap-3">
              <span>Commander maintenant</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            <div className="grid sm:grid-cols-3 gap-6 mt-8 pt-8 border-t border-neutral-800">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <div>
                  <p className="text-sm text-white font-normal">Garantie 2 ans</p>
                  <p className="text-xs text-neutral-500 font-light">Satisfait ou remboursé</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
                <div>
                  <p className="text-sm text-white font-normal">Livraison offerte</p>
                  <p className="text-xs text-neutral-500 font-light">Sous 3-5 jours</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <div>
                  <p className="text-sm text-white font-normal">Paiement sécurisé</p>
                  <p className="text-xs text-neutral-500 font-light">SSL crypté</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-neutral-500 font-light mb-2">
              Questions ? Notre équipe est disponible 7j/7
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-amber-400 text-sm font-light hover:text-amber-300 transition-colors duration-300">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              contact@chainedehanche.com
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}