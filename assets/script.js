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
// Code exécuté lorsque le DOM est entièrement chargé
document.addEventListener("DOMContentLoaded", function (event) {

    const banner = document.getElementById('banner');
    const bannerImg = document.querySelector('.banner-img');
    const bannerText = document.querySelector('#banner p');
    const dotsContainer = document.querySelector('.dots');
    const arrowLeft = document.querySelector('.arrow_left');
    const arrowRight = document.querySelector('.arrow_right');

    let currentSlide = 0;

    // Créer les points de repère (dots)
    createDots();
    // Afficher la première diapositive
    showSlide(currentSlide);

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
        const dots = document.querySelectorAll('.dot');
        dots.forEach(dot => dot.classList.remove("dot_selected"));
        dots[index].classList.add('dot_selected');
    }

    // Créer les points de repère
    function createDots() {
        for (let i = 0; i < slides.length; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            dotsContainer.appendChild(dot);
        }
        updateDots(currentSlide);
        listenDots();
    }

    // Écouter les clics sur les points de repère
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

    // Écouter les clics sur les flèches
    arrowLeft.addEventListener('click', function () {
        prevSlide();
    });

    arrowRight.addEventListener('click', function () {
        nextSlide();
    });
});

