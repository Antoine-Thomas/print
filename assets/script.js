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

// Fonction pour afficher une diapositive spécifique
function showSlide(index) {
    // Vérifier si l'index est inférieur à 0 ou supérieur ou égal à la longueur des diapositives
    if (index < 0) {
        currentSlide = slides.length - 1; // Revenir à la dernière diapositive si nécessaire
    } else if (index >= slides.length) {
        currentSlide = 0; // Revenir à la première diapositive si nécessaire
    }
    // Mettre à jour l'image et le texte de la diapositive actuelle
    bannerImg.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
    bannerText.innerHTML = slides[currentSlide].tagLine;
}

// Fonction pour mettre à jour les points de repère
function updateDots(index) {
    dotsContainer.innerHTML = ''; // Effacer les points de repère existants
    // Créer et ajouter les nouveaux points de repère
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === index) {
            dot.classList.add('dot_selected'); // Marquer le point de repère actif
        }
        dotsContainer.appendChild(dot);
    }
}

// Fonction pour passer à la diapositive suivante
function nextSlide() {
    currentSlide++; // Incrémenter l'index de la diapositive
    showSlide(currentSlide); // Afficher la diapositive suivante
    updateDots(currentSlide); // Mettre à jour les points de repère
}

// Fonction pour passer à la diapositive précédente
function prevSlide() {
    currentSlide--; // Décrémenter l'index de la diapositive
    showSlide(currentSlide); // Afficher la diapositive précédente
    updateDots(currentSlide); // Mettre à jour les points de repère
}

// Écouter les événements de clic sur les flèches
arrowLeft.addEventListener('click', function() {
    console.log("Bouton gauche cliqué");
    prevSlide(); // Appeler la fonction pour passer à la diapositive précédente
});

arrowRight.addEventListener('click', function() {
    console.log("Bouton droit cliqué");
    nextSlide(); // Appeler la fonction pour passer à la diapositive suivante
});

