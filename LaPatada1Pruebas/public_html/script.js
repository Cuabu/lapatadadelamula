let currentImage = 0;
const totalImages = 4; // Cambiar al total de imágenes que tienes

function showImage(index) {
    const images = document.querySelectorAll('.carousel-item');
    images.forEach((image, i) => {
        if (i === index) {
            image.classList.add('active');
        } else {
            image.classList.remove('active');
        }
    });
}

function nextImage() {
    currentImage = (currentImage + 1) % totalImages;
    showImage(currentImage);
}

function prevImage() {
    currentImage = (currentImage - 1 + totalImages) % totalImages;
    showImage(currentImage);
}

setInterval(nextImage, 3000);  // Cambiar imagen cada 3 segundos

// Para hacer el carrusel infinito
const carousel = document.querySelector('.carousel');
carousel.addEventListener('transitionend', () => {
    const images = document.querySelectorAll('.carousel-item');
    if (currentImage === 0) {
        images[totalImages - 1].classList.remove('active');
    } else if (currentImage === totalImages - 1) {
        images[0].classList.remove('active');
    }
});
