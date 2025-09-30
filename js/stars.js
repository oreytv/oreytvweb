// Create star container
const starContainer = document.createElement('div');
starContainer.id = 'star-container';
starContainer.style.position = 'fixed';
starContainer.style.top = '0';
starContainer.style.left = '0';
starContainer.style.width = '100%';
starContainer.style.height = '100%';
starContainer.style.overflow = 'hidden';
starContainer.style.pointerEvents = 'none';
starContainer.style.zIndex = '-1';
document.body.appendChild(starContainer);

// Function to create a star
function createStar() {
    const star = document.createElement('img');
    star.src = 'assets/sharpstar.png';
    star.className = 'star';
   
    // Random size (varied sizes for depth)
    const size = Math.random() * 180 + 1; // 60px to 240px
    star.style.width = size + 'px';
    star.style.height = size + 'px';
   
    // Random position - ensuring full coverage including edges
    star.style.position = 'absolute';
    star.style.left = (Math.random() * 110 - 5) + '%'; // -5% to 105% to cover edges
    star.style.top = (Math.random() * 110 - 5) + '%';  // -5% to 105% to cover edges
   
    // Random initial rotation
    const initialRotation = Math.random() * 360;
    
    // Random rotation speed - VARIED SPEEDS
    const duration = Math.random() * 25 + 10; // 10s to 35s for varied speeds
    const direction = Math.random() > 0.5 ? 'normal' : 'reverse'; // Some rotate backwards
    
    star.style.transform = `rotate(${initialRotation}deg)`;
    star.style.transformOrigin = 'center center';
   
    // Random opacity for depth
    star.style.opacity = 1
   
    // Animation with random speed and direction
    star.style.animation = `rotateStar ${duration}s linear infinite ${direction}`;
   
    starContainer.appendChild(star);
}

// CSS for rotation animation
const style = document.createElement('style');
style.textContent = `
    @keyframes rotateStar {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
   
    .star {
        position: absolute;
        pointer-events: none;
    }
`;
document.head.appendChild(style);

// Generate MANY more stars (300 stars for full coverage)
for (let i = 0; i < 300; i++) {
    createStar();
}

// Add more stars periodically to maintain density
setInterval(() => {
    if (document.querySelectorAll('.star').length < 300) {
        createStar();
    }
}, 2000);