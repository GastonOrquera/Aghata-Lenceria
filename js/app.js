document.addEventListener('DOMContentLoaded', function () {

    ScrollReveal().reveal('.scroll-reveal', {

        origin: 'right',
        distance: '40px',
        duration: 1600,
        easing: 'cubic-bezier(0.5,0,0,1)',
        interval: 200,
        opacity: 1

    });

    ScrollReveal().reveal('.scroll-reveal2', {

        origin: 'left',
        distance: '40px',
        duration: 1000,
        easing: 'cubic-bezier(0.5,0,0,1)',
        interval: 200

    });

    ScrollReveal().reveal('.scroll-reveal3', {
        origin: 'left',
        distance: '200px',
        duration: 4000,
        easing: 'cubiz-bezier(0.5,0,0,1)',
        interval: 200
    });

    var hamburger = document.querySelector(".hamburger");

    var nav = document.querySelector("nav");

    var navLinks = document.querySelectorAll("nav a");

    hamburger.onclick = function () {

        nav.classList.toggle("active");

    }

    navLinks.forEach(function (link) {

        link.addEventListener('click', function () {

            nav.classList.remove("active");

        });


    });

    // Obtén el elemento del ícono de caret
    const caretIcon = document.querySelector('.bi-caret-down-fill');

    // Obtén el elemento del menú desplegable
    const dropdownMenu = document.querySelector('.nav__dropdown');



    // Agrega un evento click al ícono de caret
    caretIcon.addEventListener('click', function () {
        // Alternar las clases para cambiar la visibilidad del menú desplegable

        dropdownMenu.classList.toggle('visible');
    });


});
