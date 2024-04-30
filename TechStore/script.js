let slideIndex = 0;
let slides = document.querySelectorAll('.slides img');
let totalSlides = slides.length;

function showSlide(n) {
    if (n >= totalSlides) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = n;
    }
    
    // Quitamos la clase 'current' de todas las imágenes
    slides.forEach(slide => {
        slide.classList.remove('current');
    });
    
    // Agregamos la clase 'current' a la imagen actual
    slides[slideIndex].classList.add('current');
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function prevSlide() {
    showSlide(slideIndex - 1);
}

// Event listeners para los botones
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

// Slide inicial
showSlide(slideIndex);

function mostrarMensaje() {
    alert("Estamos trabajando en ello.");
}