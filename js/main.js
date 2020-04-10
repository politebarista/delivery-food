const basket = document.querySelector('#basket');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

basket.addEventListener('click', function(event) {
    modal.classList.add('is-open')
} );

close.addEventListener('click', function(event) {
    modal.classList.remove('is-open')
} );

new WOW().init();