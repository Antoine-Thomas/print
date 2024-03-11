const slides = [
    {   
        "image":"slide1.jpg",
        "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image":"slide2.jpg",
        "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image":"slide3.jpg",
        "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image":"slide4.png",
        "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

const banner = document.getElementById('banner');
const bannerImg = document.querySelector('.banner-img');
const bannerText = document.querySelector('#banner p');
const dotsContainer = document.querySelector('.dots');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

let currentSlide = 0;
let slideInterval; // Pour stocker l'ID de l'intervalle

// Sélectionnez les flèches gauche et droite
const prevArrow = document.querySelector('.arrow_left');
const nextArrow = document.querySelector('.arrow_right');

// Modifiez la couleur des flèches en blanc
prevArrow.style.color = 'white';
nextArrow.style.color = 'white';

function showSlide(index) {
    bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
    bannerText.innerHTML = slides[index].tagLine;
}

function updateDots(index) {
    dotsContainer.innerHTML = '';
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === index) {
            dot.classList.add('dot_selected');
        }
        dotsContainer.appendChild(dot);
    }
}

function nextSlide() {
    currentSlide++;
    if (currentSlide === slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
    updateDots(currentSlide);
}

function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
    updateDots(currentSlide);
}

function startSlideShow() {
    slideInterval = setInterval(nextSlide, 2000); // Défilement automatique toutes les 5 secondes
}

// Écouter les événements de clic sur les flèches
arrowLeft.addEventListener('click', prevSlide);
arrowRight.addEventListener('click', nextSlide);

// Démarrer le diaporama automatique lors du chargement de la page
startSlideShow();

// Initialize
showSlide(currentSlide);
updateDots(currentSlide);
