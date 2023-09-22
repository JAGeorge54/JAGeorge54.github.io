const navLinkEls = document.querySelectorAll('.nav-link');
const windowPathname = window.location.pathname;
navLinkEls.forEach(navLinkEls => {
  if (navLinkEls.href.includes(windowPathname)) {
    navLinkEls.classList.add('active');
  }
});