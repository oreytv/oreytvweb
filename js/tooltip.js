// Hover tooltip system
function initTooltips() {
    // Handle thumbnail items
    const thumbnailItems = document.querySelectorAll('.thumbnail-item');
    thumbnailItems.forEach(item => {
        const img = item.querySelector('img');
        const infoText = img ? img.getAttribute('data-info') : null;
        
        if (infoText) {
            const tooltip = createTooltip(infoText);
            document.body.appendChild(tooltip); // Add to body
            
            item.addEventListener('mouseenter', () => {
                const rect = item.getBoundingClientRect();
                tooltip.style.position = 'fixed';
                tooltip.style.left = (rect.left + rect.width / 2) + 'px';
                tooltip.style.top = (rect.top - 10) + 'px';
                tooltip.style.transform = 'translate(-50%, -100%)';
                tooltip.classList.add('show');
            });
            
            item.addEventListener('mouseleave', () => {
                tooltip.classList.remove('show');
            });
        }
    });
    
    // Handle carousel images
    const carouselContainer = document.querySelector('.carousel-container');
    if (!carouselContainer) return;
    
    let carouselTooltip = null;
    
    carouselContainer.addEventListener('mouseenter', () => {
        const activeImage = document.querySelector('.carousel-image.active');
        const infoText = activeImage ? activeImage.getAttribute('data-info') : null;
        
        if (infoText) {
            if (!carouselTooltip) {
                carouselTooltip = createTooltip(infoText);
                document.body.appendChild(carouselTooltip); // Add to body
            } else {
                carouselTooltip.textContent = infoText;
            }
            
            const rect = carouselContainer.getBoundingClientRect();
            carouselTooltip.style.position = 'fixed';
            carouselTooltip.style.left = (rect.left + rect.width / 2) + 'px';
            carouselTooltip.style.top = (rect.top - 10) + 'px';
            carouselTooltip.style.transform = 'translate(-50%, -100%)';
            carouselTooltip.classList.add('show');
        }
    });
    
    carouselContainer.addEventListener('mouseleave', () => {
        if (carouselTooltip) {
            carouselTooltip.classList.remove('show');
        }
    });
    
    // Update tooltip when carousel changes
    document.addEventListener('carouselChange', () => {
        if (carouselTooltip) {
            carouselTooltip.classList.remove('show');
        }
    });
}

function createTooltip(text) {
    const tooltip = document.createElement('div');
    tooltip.className = 'hover-tooltip';
    tooltip.textContent = text;
    
    // Apply wobble effect using the existing function
    if (typeof applyWobbleToElement === 'function') {
        applyWobbleToElement(tooltip);
    }
    
    return tooltip;
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initTooltips();
    // Reinitialize wobble to catch the new tooltip elements
    if (typeof initWobble === 'function') {
        initWobble();
    }
});