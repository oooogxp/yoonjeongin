export const accordionReady = () => {
  document.querySelectorAll('.accordion').forEach((element) => {
      element.addEventListener('click', toggleAccordion);
  });
};

const toggleAccordion = (event) => {
  const accordion = event.currentTarget;

  if (accordion.classList.contains('active')) {
      resetAccordion();
  } else {
      resetAccordion();
      if (!accordion.classList.contains('active')) {
          accordion.classList.add('active');
          accordion.querySelector('span.active-icon').innerHTML = '-';
      }
  }

};

const resetAccordion = () => {
  document.querySelectorAll('.accordion').forEach(function(element) {
      if (element.classList.contains('active')) {
          element.classList.remove('active');
          element.querySelector('span.active-icon').innerHTML = '+';
      }
  });
}