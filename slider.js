
const tabletMedia = window.matchMedia('screen and (max-width: 760px)');
const padMedia = window.matchMedia('screen and (min-width: 760px) and (max-width: 1120px)'); 
const deskMedia = window.matchMedia('screen and (min-width: 1120px)');

let numHidden =  3;
padMedia.addEventListener('change', event => 
{ if (event.matches) { numHidden = 5; } });
deskMedia.addEventListener('change', event => 
{ if (event.matches) { numHidden = 3; } });
  

tabletMedia.addEventListener('change', event => {

  if (event.matches) {
    swiper = new Swiper('.swiper', {
          loop: false,
          slidesPerView: 'auto',
          spaceBetween: 16,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        });
  } else {
    swiper.destroy();
  }
})

const btn_swap = document.querySelector('.btn-swap');

btn_swap.addEventListener('click', function (evt) {
  evt.preventDefault();

   if (btn_swap.textContent == 'Спрятать')  {
    const activeCards = document.querySelectorAll('.card:not(.shut)');
    const last_idx = activeCards.length - 1;
    for (let i = last_idx; i > last_idx - numHidden; i--) {
      activeCards[i].classList.add('shut');
    }
    btn_swap.textContent='Показать все';
  }
  else {
    const hiddenCards = document.querySelectorAll('.card.shut');
    for (let hiddenCard of hiddenCards) {
      hiddenCard.classList.remove('shut');
    }
    btn_swap.textContent='Спрятать';
  }

  this.addEventListener('animationend', () => {
    let btn_rotate = document.querySelector('.btn-rotate');
    if (btn_rotate) { 
      btn_rotate.classList.remove('btn-rotate');
    }
  });

  this.classList.add('btn-rotate');

});
