const basket = document.querySelector('#basket');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
const aut = document.querySelector('#aut');
const login = document.querySelector('.modal-login');
const closel = document.querySelector('.closel');

basket.addEventListener('click', function(event) {
    modal.classList.add('is-open');
} );

close.addEventListener('click', function(event) {
    modal.classList.remove('is-open');
} );

aut.addEventListener('click', function(event) {
    modal-login.classList.add('login-is-open');
} );

closel.addEventListener('click', function(event) {
    modal-login.classList.remove('login-is-open');
} );

new WOW().init();