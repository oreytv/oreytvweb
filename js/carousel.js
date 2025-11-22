let currentArtSlide = 0;

function changeArtSlide(direction) {
    const images = document.querySelectorAll('.carousel-image');
    images[currentArtSlide].classList.remove('active');
    
    currentArtSlide += direction;
    
    if (currentArtSlide >= images.length) {
        currentArtSlide = 0;
    } else if (currentArtSlide < 0) {
        currentArtSlide = images.length - 1;
    }
    
    images[currentArtSlide].classList.add('active');
    document.dispatchEvent(new Event('carouselChange'));
}

// Auto-advance carousel every 5 seconds
setInterval(() => {
    changeArtSlide(1);
}, 5000);