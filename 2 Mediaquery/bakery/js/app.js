var mobileMenu = document.querySelector('.mobileMenu i');
var navMenu = document.querySelector('.navMenu');

mobileMenu.addEventListener('click', function () {
    navMenu.classList.toggle('showMobileMenu');
    mobileMenu.classList.toggle('fa-bars');
    mobileMenu.classList.toggle('fa-xmark');

})

var bg_header = document.querySelector('.bg_header');
var header = document.querySelector('.header');

window.addEventListener(
    'scroll',
    () => {
        if (window.scrollY >= 40) {
            bg_header.classList.add('show_bg_header');
            header.classList.add('stickyHeader');
        } else {
            bg_header.classList.remove('show_bg_header')
            header.classList.remove('stickyHeader');
        }
    }
)