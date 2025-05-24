const audio = document.getElementById('bgMusic');
const button = document.getElementById('musicButton');
const slideshow = document.querySelector('.slideshow-container');
const slides = document.querySelectorAll('.slide');
let slideIndex = -1;
let slideInterval;

audio.volume = 0.3;

function showSlides() {
    slides.forEach(slide => slide.style.display = 'none');
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].style.display = 'block';
}

// button klick
const linkleiste = document.querySelector('.linkleiste');
button.addEventListener('click', () => {
    audio.play();
    button.style.display = 'none';
    slideshow.style.display = 'block';  // Slideshow anzeigen
    linkleiste.style.display = 'flex'; // linkleiste anzeigen

    // Slideshow starten
    showSlides(); // erste Anzeige
    slideInterval = setInterval(showSlides, 1000);
});