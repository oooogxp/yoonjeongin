export const generalConfig = () => {

  // Setting up closing functionality
  document.querySelector('.close-w-backdrop').addEventListener('click', closeAllModules);
  document.querySelector('#backdrop').addEventListener('click', closeAllModules);

  // Close Menu when ESC is pressed
  document.addEventListener('keydown', function(event){
    if (event.key === "Escape" && !document.querySelector('#nav-menu').classList.contains('backdrop-toggle-hide')) {
      closeAllModules(event);
    }
  });
}

// ========== Nav Menu =========
export const navbarReady = () => { 
  // Intialize Slider Nav Menu
  document.querySelector('.nav-hamburger-icon').addEventListener('click', openNavbar);
  document.querySelector('.nav-hamburger-icon-mobile').addEventListener('click', openNavbar);
  
  // Close Nav Menu
  document.querySelector('.nav-menu-close').addEventListener('click', closeAllModules);
};
// ========= Enable Navbar =========
const openNavbar = () => {
  document.querySelector('#nav-menu').classList.remove('nav-toggle-hide');
  openBackdrop();
}

// ========== Modal =========
export const modalReady = () => {
  document.querySelector('.modal-open').addEventListener('click', openModal);
  
  // Close Modal
  document.querySelectorAll('.modal-close').forEach((element) => {
    element.addEventListener('click', closeAllModules);
  });
}

const openModal = (e) => {
  e.preventDefault();

  // document.querySelector('#toggle-backdrop-element').classList.toggle('backdrop-toggle-hide');
  if (document.querySelector('.modal-container')) {
    document.querySelector('.modal-container').classList.remove('modal-toggle-hide');
  }
  document.body.classList.add('modal-opened');
  openBackdrop();
}


// ========== Enable Backdrop =========
const openBackdrop = () => {
  document.querySelector('#backdrop').classList.remove('backdrop-toggle-hide');
}

// ========== Close Everything =========
const closeAllModules = (e) => {
  e.preventDefault();
  // Stop Video when module closes
  if (document.querySelector('.video-container')) {
    videoStopper(".video-container");
  }
  
  // Close Navbar
  if (document.querySelector('#nav-menu') && !document.querySelector('#nav-menu').classList.contains('nav-toggle-hide')) {
    document.querySelector('#nav-menu').classList.add('nav-toggle-hide');
  }

  // Close Modal
  if (document.querySelector('.modal-container') && !document.querySelector('.modal-container').classList.contains('modal-toggle-hide')) {
    document.querySelector('.modal-container').classList.add('modal-toggle-hide');
  }
  if (document.body.classList.contains('modal-opened')) {
    document.body.classList.remove('modal-opened');
  }

  // Close Backdrop
  if (document.querySelector('#backdrop') && !document.querySelector('#backdrop').classList.contains('backdrop-toggle-hide')) {
    document.querySelector('#backdrop').classList.add('backdrop-toggle-hide');
  }
}

// Stop Video player when modal is closed.
const videoStopper = (selector) => {
  const containerElement = document.querySelector(selector);
  let iframe_tag = containerElement.querySelector( 'iframe');
  const video_tag = containerElement.querySelector( 'video' );
  if (iframe_tag) {
      const iframeSrc = iframe_tag.src;
      iframe_tag.src = iframeSrc; 
  }
  if (video_tag) {
      video_tag.pause();
  }
}