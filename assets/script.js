const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et événements</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux Pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];
// Récupération des éléments HTML
const banner = document.getElementById('banner');
const bannerImg = document.querySelector('.banner-img');
const bannerText = document.querySelector('#banner p');
const dotsContainer = document.querySelector('.dots');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

let currentSlide = 0; // Indice de la diapositive actuelle

// Création des points de repère (dots)
createDots();
// Affichage de la première diapositive
showSlide(currentSlide);

// Fonction pour afficher une diapositive spécifique
function showSlide(index) {
    if (index < 0) {
        currentSlide = slides.length - 1; // Revenir à la dernière diapositive si nécessaire
    } else if (index >= slides.length) {
        currentSlide = 0; // Revenir à la première diapositive si nécessaire
    }
    // Mise à jour de l'image et du texte de la diapositive actuelle
    bannerImg.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
    bannerText.innerHTML = slides[currentSlide].tagLine;
}

// Fonction pour mettre à jour les points de repère
function updateDots(index) {
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove("dot_selected"));
    dots[index].classList.add('dot_selected');
}

// Création des points de repère
function createDots() {
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dotsContainer.appendChild(dot);
    }
    updateDots(currentSlide); // Mise à jour des points de repère pour afficher celui correspondant à la diapositive actuelle
    listenDots(); // Ajout des écouteurs d'événements aux points de repère
}

// Écoute des clics sur les points de repère
function listenDots() {
    const dots = document.querySelectorAll('.dot');
    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener('click', function (e) {
            currentSlide = i;
            showSlide(i);
            updateDots(currentSlide);
        });
    }
}

// Fonction pour passer à la diapositive suivante
function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
    updateDots(currentSlide);
}

// Fonction pour passer à la diapositive précédente
function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
    updateDots(currentSlide);
}

// Écoute des clics sur les flèches
arrowLeft.addEventListener('click', function () {
    prevSlide();
});

arrowRight.addEventListener('click', function () {
    nextSlide();
});


