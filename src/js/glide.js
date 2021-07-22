import Glide from '@glidejs/glide';

export const glideReady = () => {
  // Slide Glide
  // NOTE: The code below allows multiple slides / carousels to be in the same page.

  // Check if the glide element exist in the page
  if (document.querySelectorAll('.glide').length > 0) {

    let sliders = document.querySelectorAll('.glide');
    for (let i = 0; i < sliders.length; i++) {
      let glide = new Glide(sliders[i], {
        type: 'carousel',
        startAt: 0,
        perView: 1,
        slideWidth: 1000,
        gap: 50,
        autoplay: 5000
      });
      
      // Testimonial carousel - adding dynamic label
      // Check if Testimonial carousel exist on the page
      if (document.querySelector('.testimonial-current') != null) {
        glide.on(['mount.after', 'run'], () => {
          const currentSlide = glide.index;
          
          // Update Current Slide No.
          document.querySelector('.testimonial-current').innerHTML = currentSlide + 1 < 10 ? `0${currentSlide + 1}` : `${currentSlide + 1}`;
      
          // Highlight Current Slide No.
          // 1. Check and remove any unecessary 'custom-color-orange' class
          const testimonialIndexContainer = document.querySelector('.testimonial-index-container');
          for (let i = 0; i < testimonialIndexContainer.children.length; i++) {
            if (testimonialIndexContainer.children[i].classList.contains('custom-color-orange')) {
              testimonialIndexContainer.children[i].classList.remove('custom-color-orange');
            }
          }
          // 2. Add the 'custom-color-orange' class to active carousel
          document.querySelector('.testimonial-index-' + currentSlide).classList.add('custom-color-orange');
      
        });
      
      }
      glide.mount();
    }

  }

}
