
let flag = window.matchMedia('(max-width: 760px)');

window.addEventListener('resize', () => {
  if (flag.matches) {
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



// ******************************************************

let btn_hide = document.querySelector('.btn-hide');
let btn_all = document.querySelector('.btn-all');

btn_hide.addEventListener('click', function (evt) {
  evt.preventDefault();

  let activeCards = document.querySelectorAll('.card:not(.shut)');
  const last_idx = activeCards.length - 1;
  let numHidden = 5; 
  if (innerWidth > 1120) { numHidden = 3;}

  for (let i = last_idx; i > last_idx - numHidden; i--) {
    activeCards[i].classList.add('shut');
  }

  btn_all.classList.toggle('shut');
  this.classList.toggle('shut'); 
});

btn_all.addEventListener('click', function (evt) {
  evt.preventDefault();

  let hiddenCards = document.querySelectorAll('.card.shut');
  let numHidden = 5; 
  if (innerWidth > 1120) { numHidden = 3; }
  
  for (let i = 0; i <= hiddenCards.length - 1; i++) {
    hiddenCards[i].classList.remove('shut');
  }

  btn_hide.classList.toggle('shut');
  this.classList.toggle('shut');
});
