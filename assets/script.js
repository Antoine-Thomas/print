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

// Fonction defilement infini déclarations condition
function showSlide(index) {
    if (index < 0) {
        currentSlide = slides.length - 1; // aller à la dernière diapositive si nécessaire
    } else if (index >= slides.length) {
        currentSlide = 0; // Revenir à la première diapositive si nécessaire
    }
    // Mise à jour de l'image et du texte de la diapositive actuelle
    bannerImg.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
    bannerText.innerHTML = slides[currentSlide].tagLine;
}





// Fonction pour mettre à jour le point de repère plein
function updateDots(index) {
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove("dot_selected"));
    dots[index].classList.add('dot_selected');
}


// Création des points de repère vides en boucle
function createDots() {
    for (let index = 0; index < slides.length; index++) {
        const dot = document.createElement('div');
        dotsContainer.appendChild(dot);
        dot.classList.add('dot');
    }
    updateDots(currentSlide); // Mise à jour des points de repère pour afficher celui correspondant à la diapositive actuelle
    listenDots(); // Ajout des écouteurs d'événements aux points de repère
}

// Écoute des clics sur les points de repère
function listenDots() {
    const dots = document.querySelectorAll('.dot');
    for (let index = 0; index < dots.length; index++) {
        dots[index].addEventListener('click', function (event) {
            currentSlide = index;
            showSlide(index);
            updateDots(currentSlide);
        });
    }
}




// Fonctions click pour les flèches

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
    console.log('Clic sur la flèche gauche');
    prevSlide();
});

arrowRight.addEventListener('click', function () {
    console.log('Clic sur la flèche droite');
    nextSlide();
});



