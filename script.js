const slides = document.querySelector('.slider-content');
const slideCount = document.querySelectorAll('.slider-card').length;

let currentSlide = 0;
let slideInterval;

const showSlide = (i) => {
    if (i >= slideCount) {
        currentSlide = 0;
    } else if (i < 0) {
        currentSlide = slideCount - 1;
    } else {
        currentSlide = i;
    }
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateDots();
};

const prevSlide = () => {
    showSlide(currentSlide - 1);
};

const nextSlide = () => {
    showSlide(currentSlide + 1);
};

const prevSlideShow = document.querySelector('.slider-prev');
const nextSlideShow = document.querySelector('.slider-next');

prevSlideShow.addEventListener('click', () => {
    prevSlide();
    stopAutoSlide();
    startAutoSlide();
});

nextSlideShow.addEventListener('click', () => {
    nextSlide();
    stopAutoSlide();
    startAutoSlide();
});

const startAutoSlide = () => {
    slideInterval = setInterval(nextSlide, 3000); // Set to 3000ms (3 seconds) for a smoother experience
};

const stopAutoSlide = () => {
    clearInterval(slideInterval);
};

const createDots = () => {
    const dotsContainer = document.querySelector('.slider-dots');
    dotsContainer.innerHTML = '';
    for (let i = 0; i < slideCount; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dotsContainer.appendChild(dot);
        dot.addEventListener('click', () => {
            showSlide(i);
            stopAutoSlide();
            startAutoSlide();
        });
    }
    updateDots(); // Ensure the first dot is active when dots are created
};

const updateDots = () => {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
};

showSlide(currentSlide);
startAutoSlide();
createDots();
