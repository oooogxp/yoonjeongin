// export const cookieSetting = () => {
  
//   document.querySelector('.cookie-banner-container-close').addEventListener('click', closeCookieBanner);
//   // Display Cookie banner if Cookie Setting is not set (null)
//   if (sessionStorage.getItem('cookieSetting') !== 'true') {
//     if (sessionStorage.getItem('noCookie') !== 'true') {
//       document.querySelector('.cookie-banner-container').classList.remove('hidden');
//     }
//   }

//   // console.log(sessionStorage.getItem('cookieSetting'), sessionStorage.getItem('noCookie'));

//   document.querySelector('.accept-cookie-consent').addEventListener('click', activateCookie);
// };

// const activateCookie = () => {
//   document.querySelector('.cookie-banner-container').classList.add('hidden');
//   sessionStorage.setItem('cookieSetting', 'true');
// };

// const closeCookieBanner = () => {
//   document.querySelector('.cookie-banner-container').classList.add('hidden');
//   sessionStorage.setItem('noCookie', 'true');
// };