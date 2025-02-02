// Gestion des sections "vente" et "vendu"
const sections = {
    vente: document.querySelector("#vente"),
    vendu: document.querySelector("#vendu")
};

function showSection(sectionId) {
    Object.keys(sections).forEach(id => {
        sections[id].style.display = id === sectionId ? "block" : "none";
    });
}

window.onload = () => {
    showSection('vente'); // Afficher la section "vente" par défaut
};

// Gestion des sliders pour les images
function createSlider(slidesSelector, displayClass) {
    const slides = document.querySelectorAll(slidesSelector);
    let index = 0;
    let intervalId = null;

    function showSlide(newIndex) {
        index = (newIndex + slides.length) % slides.length;
        slides.forEach(slide => slide.classList.remove(displayClass));
        slides[index].classList.add(displayClass);
    }

    function prevSlide() {
        clearInterval(intervalId);
        showSlide(index - 1);
    }

    function nextSlide() {
        clearInterval(intervalId);
        showSlide(index + 1);
    }

    function startAutoSlide(interval = 5000) {
        intervalId = setInterval(() => {
            showSlide(index + 1);
        }, interval);
    }

    document.addEventListener("DOMContentLoaded", () => {
        if (slides.length > 0) {
            showSlide(0);
            startAutoSlide();
        }
    });

    return { prevSlide, nextSlide };
}

const slider0 = createSlider(".slides0 img", "displaySlide");
window.prevSlide0 = slider0.prevSlide;
window.nextSlide0 = slider0.nextSlide;

const slider1 = createSlider(".slides1 img", "displaySlide");
window.prevSlide1 = slider1.prevSlide;
window.nextSlide1 = slider1.nextSlide;

const slider2 = createSlider(".slides2 img", "displaySlide");
window.prevSlide2 = slider2.prevSlide;
window.nextSlide2 = slider2.nextSlide;

// Initialisation des sections "vente" et "vendu" sur DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    showSection("vente");
});

