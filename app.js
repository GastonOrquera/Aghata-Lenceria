hamburger = document.querySelector(".hamburger");
nav = document.querySelector("nav");
hamburger.onclick = function () {
    nav.classList.toggle("active");
}

document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal().reveal('.scroll-reveal', {
        origin: 'right',
        distance: '120px',
        duration: 2000,
        easing: 'cubic-bezier(0.5,0,0,1)',
        interval: 200,
        opacity: 1
    });
    ScrollReveal().reveal('.scroll-reveal2', {
        origin: 'right',
        distance: '40px',
        duration: 1000,
        easing: 'cubic-bezier(0.5,0,0,1)',
        interval: 200
    });
});



