// jquery

// Ao carregar o documento chama o Jquery referenciado para funcionar o evendo dropdown 
$(document).ready(() => {
    $('.dropdown-trigger').dropdown();
});



// javascript puro
// Quando o evento load ocorrer a função é chamada
window.addEventListener('load', () => {
   changeBackgroundHeaderJs();
});
// Quando o evento resize ocorrer a função é chamada
window.addEventListener('resize', () => {
   changeBackgroundHeaderJs();
});
// Quando o evento scroll ocorrer a função é chamada
window.addEventListener('scroll', () => {
   changeBackgroundHeaderJs();
});

function changeBackgroundHeaderJs() {
   const header = document.getElementsByTagName('header')[0];
   const offesetY = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(offesetY)
   const mlt = 1;

   if (offesetY > (header.clientHeight * mlt)) {
      header.classList.add('--background-black');
      return;
   }

   header.classList.remove('--background-black');
}
