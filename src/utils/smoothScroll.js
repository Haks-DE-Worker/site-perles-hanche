/**
 * Gère le défilement fluide vers une ancre
 * @param {Event} e - L'événement de clic
 * @param {string} targetId - L'ID de l'élément cible (avec ou sans #)
 */
export const handleSmoothScroll = (e, targetId) => {
  e.preventDefault();
  
  // Nettoyer l'ID pour enlever le # s'il existe
  const cleanId = targetId.replace('#', '');
  
  // Trouver l'élément cible
  const targetElement = document.getElementById(cleanId);
  
  if (targetElement) {
    // Calculer la position avec un offset pour le header si nécessaire
    const offsetTop = targetElement.offsetTop - 80; // 80px d'offset pour le header
    
    // Défilement fluide
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
};

/**
 * Hook pour initialiser le smooth scroll sur tous les liens d'ancrage
 * Utiliser dans un useEffect au montage du composant
 */
export const initSmoothScroll = () => {
  const handleClick = (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (link) {
      const href = link.getAttribute('href');
      if (href && href !== '#') {
        handleSmoothScroll(e, href);
      }
    }
  };

  document.addEventListener('click', handleClick);
  
  return () => {
    document.removeEventListener('click', handleClick);
  };
};
