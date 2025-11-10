document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.box, .profile-image, .text-row');
    
    elements.forEach(element => {
        const randomRotation = (Math.random() * 4 - 2).toFixed(2); // Random between -2 and 2 degrees
        element.style.transform = `rotate(${randomRotation}deg)`;
    });
});