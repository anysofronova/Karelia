$(function() {
    $('.tours__sliders').slick({
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    })
})

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

// ===================== Show menu =====================
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

// ===================== Close menu =====================
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}



// ===================== Remove menu =====================
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// ===================== Change menu color =====================
let toggle = document.getElementById('nav-toggle');
window.addEventListener('scroll', function(e) {
    let last_known_scroll_position = window.scrollY;
    if (last_known_scroll_position > 730) {
        toggle.style.color = 'black';
    } else {
        toggle.style.color = 'white';
    }
});

$('a[href^="#"').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    });
    return false;
});