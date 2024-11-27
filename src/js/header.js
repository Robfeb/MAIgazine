export function initHeader() {
  let lastScroll = 0;
  const header = document.querySelector('.header');
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
      header.classList.add('hidden');
    } else {
      header.classList.remove('hidden');
    }
    
    lastScroll = currentScroll;
  });
}