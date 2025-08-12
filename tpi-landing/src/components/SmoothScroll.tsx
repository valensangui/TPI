'use client';

export function smoothScrollTo(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }
}

export function handleSmoothScroll(e: React.MouseEvent<HTMLAnchorElement>, elementId: string) {
  e.preventDefault();
  
  // Si estamos en la página principal, hacer scroll suave
  if (window.location.pathname === '/') {
    smoothScrollTo(elementId);
  } else {
    // Si estamos en otra página, redirigir y luego hacer scroll
    const targetUrl = `/#${elementId}`;
    
    // Guardar la información del scroll en sessionStorage
    sessionStorage.setItem('scrollTo', elementId);
    
    // Redirigir a la página principal
    window.location.href = targetUrl;
  }
}

// Función para ejecutar después de que la página se carga
export function executeScrollAfterLoad() {
  const scrollTo = sessionStorage.getItem('scrollTo');
  if (scrollTo) {
    // Limpiar el sessionStorage
    sessionStorage.removeItem('scrollTo');
    
    // Esperar un poco para que la página se renderice completamente
    setTimeout(() => {
      if (scrollTo === 'testimonials') {
        scrollToTestimonialsSection();
      } else {
        smoothScrollTo(scrollTo);
      }
    }, 100);
  }
}

// Función específica para navegar a la sección de testimonios
export function scrollToTestimonialsSection() {
  // Calcular la posición de scroll para la sección de testimonios
  // Basado en el sistema de scroll horizontal
  const windowHeight = window.innerHeight;
  const sectionHeight = windowHeight * 2.4;
  const testimonialsPosition = sectionHeight * 3; // La sección 3 (índice 3)
  
  // Hacer scroll suave a esa posición
  window.scrollTo({
    top: testimonialsPosition,
    behavior: 'smooth'
  });
}

// Función para navegar a testimonios desde cualquier página
export function navigateToTestimonials() {
  if (window.location.pathname === '/') {
    // Si estamos en la página principal, usar la función local
    scrollToTestimonialsSection();
  } else {
    // Si estamos en otra página, redirigir y usar la función global
    sessionStorage.setItem('scrollTo', 'testimonials');
    window.location.href = '/#testimonials';
  }
}
