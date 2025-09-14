const topButtons = document.querySelectorAll('.top-btn');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    topButtons.forEach(btn => {
        const span = btn.querySelector('span');
        const rect = span.getBoundingClientRect();

        const dx = mouseX - rect.left;
        const dy = mouseY - rect.top;
        const dist = Math.sqrt(dx*dx + dy*dy);

        // Soft radial gradient effect
        const maxDist = 900; // further = softer
        const intensity = 1 - Math.min(dist / maxDist, 1);
        const alpha = intensity * 0.1 + 0.4; // very subtle

        span.style.background = `radial-gradient(circle at ${dx}px ${dy}px, rgba(255,255,255,${alpha}) 0%, rgba(17,17,17,0.6) 80%)`;
        span.style.webkitBackgroundClip = 'text';
        span.style.webkitTextFillColor = 'transparent';
    });
});
