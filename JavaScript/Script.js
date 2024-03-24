var slideIndex =1;
showSlide(slideIndex);
        
function nextslide(n) {
    showSlide(slideIndex += n);
}
        
function showSlide(n) {
    var i;
    var slides = document.getElementsByClassName("img-slide");
    var dots = document.getElementsByClassName("dot");
        
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < slides.length; i++) {
        dots[i].style.backgroundColor = "#E9D8A6";
        dots[i].style.scale = "0.7";
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].style.backgroundColor = "#AE2012";
    dots[slideIndex - 1].style.scale = "1.2";
}

const menuOpen = document.querySelector('.menu');
const menuOpenIcon = document.querySelector('.menu i');
const dropMenu = document.querySelector('.item-2');
var navbar = document.querySelector('header')

menuOpen.onclick = function () {
    dropMenu.classList.toggle('open');
    const isOpen = dropMenu.classList.contains('open');

    menuOpenIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
    
    navbar.classList.toggle('navbar-open');
}

function confirmViaWhatsApp() {
    window.open('https://wa.me/+6287752245654');
}

