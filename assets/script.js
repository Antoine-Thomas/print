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

// Modifiez la couleur des flèches en blanc
arrowLeft.style.color = 'white';
arrowRight.style.color = 'white';

function showSlide(index) {
    bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
    bannerText.innerHTML = slides[index].tagLine;
    
    // Correction apportée ici :
    console.log(`Affichage de la diapositive ${index + 1}:`);
    console.log('Image:', slides[index].image);
    console.log('Tagline:', slides[index].tagLine);
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

    console.log('Passage à la diapositive suivante. Diapositive actuelle:', currentSlide + 1);
}

function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
    updateDots(currentSlide); 

    console.log('Passage à la diapositive précédente. Diapositive actuelle:', currentSlide + 1);
}


function startSlideShow() {
    slideInterval = setInterval(nextSlide, 2000); // Défilement automatique toutes les 5 secondes
}
// Démarrer le diaporama automatique lors du chargement de la page
startSlideShow();

// Initialise le premier slide et les points
showSlide(currentSlide);
updateDots(currentSlide);

let isPlaying = true; // Le diaporama commence à jouer automatiquement

const container = document.getElementById('banner');

container.addEventListener('click', function() {
    if (isPlaying) {
        clearInterval(slideInterval); // Arrête le défilement automatique
        isPlaying = false; // Met à jour l'état de lecture
    } else {
        startSlideShow(); // Relance le défilement automatique
        isPlaying = true; // Met à jour l'état de lecture
    }
});


// Écouter les événements de clic sur les flèches
arrowLeft.addEventListener('click', prevSlide);
arrowRight.addEventListener('click', nextSlide);





