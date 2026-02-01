import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sophie M.",
      location: "Bénin",
      image: "/images/femme1.jpg",
      text: "La première fois que je l'ai portée, j'ai senti quelque chose changer en moi. Ce n'est pas juste un bijou, c'est une révélation de ma féminité.",
      rating: 5
    },
    {
      name: "Léa D.",
      location: "Ghana",
      image: "/images/femme2.jpg",
      text: "Je ne pensais pas qu'un bijou pouvait avoir autant d'impact sur ma confiance. Chaque jour, il me rappelle ma valeur. Un investissement en moi-même.",
      rating: 5
    },
    {
      name: "Camille R.",
      location: "Togo",
      image: "/images/femme3.jpg",
      text: "L'or est d'une finesse incroyable, la chaîne épouse parfaitement mes hanches. C'est devenu mon bijou signature, celui que je ne quitte jamais.",
      rating: 5
    },
    {
      name: "Emma L.",
      location: "France",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
      text: "Un luxe discret qui me fait me sentir unique. Mon partenaire adore, mais surtout, je me sens incroyablement belle et désirable.",
      rating: 5
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-neutral-50 via-white to-neutral-50 py-20 sm:py-28 lg:py-36 overflow-hidden">
      
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-rose-100/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200/50 mb-6">
            <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-xs sm:text-sm font-light text-amber-900 tracking-wider uppercase">
              Elles témoignent
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-neutral-900 leading-tight mb-6">
            Des histoires de
            <span className="block mt-2 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 bg-clip-text text-transparent font-normal">
              transformation intime
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
            Plus de 2 800 femmes ont choisi de célébrer leur féminité avec notre chaîne de hanche.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 sm:p-10 border border-neutral-200/50 hover:border-amber-300/50 shadow-sm hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <svg className="w-16 h-16 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-amber-200/50"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-amber-400 rounded-full border-2 border-white flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-normal text-neutral-900">{testimonial.name}</h3>
                  <p className="text-sm text-neutral-500 font-light">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-base text-neutral-700 font-light leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="mt-6 pt-6 border-t border-neutral-200/50">
                <div className="flex items-center gap-2 text-amber-700 text-sm font-light">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Achat vérifié</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-rose-50 rounded-2xl p-8 sm:p-12 border border-amber-200/30 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-2xl sm:text-3xl font-light text-neutral-900 ml-3">4.9/5</span>
            </div>
            
            <p className="text-base sm:text-lg text-neutral-700 font-light mb-2">
              Note moyenne sur <span className="font-normal text-amber-800">2 847 avis</span>
            </p>
            
            <p className="text-sm text-neutral-600 font-light">
              98% de nos clientes recommandent ce bijou à leurs amies proches
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}