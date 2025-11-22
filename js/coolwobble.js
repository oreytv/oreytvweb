// Cool wobble effect - actually distorts the text edges
function applyWobbleToElement(element, elemIndex) {
    const filterId = `wobble-filter-${elemIndex || Date.now()}`;
    
    // Create SVG if it doesn't exist
    let svg = document.getElementById('wobble-svg');
    if (!svg) {
        svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.id = 'wobble-svg';
        svg.style.position = 'absolute';
        svg.style.width = '0';
        svg.style.height = '0';
        document.body.appendChild(svg);
    }
    
    // Create filter
    const defs = svg.querySelector('defs') || svg.appendChild(document.createElementNS('http://www.w3.org/2000/svg', 'defs'));
    const filter = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
    filter.id = filterId;
    
    const turbulence = document.createElementNS('http://www.w3.org/2000/svg', 'feTurbulence');
    turbulence.setAttribute('type', 'fractalNoise');
    turbulence.setAttribute('baseFrequency', '0.01');
    turbulence.setAttribute('numOctaves', '1');
    turbulence.setAttribute('result', 'noise');
    
    const displacementMap = document.createElementNS('http://www.w3.org/2000/svg', 'feDisplacementMap');
    displacementMap.setAttribute('in', 'SourceGraphic');
    displacementMap.setAttribute('in2', 'noise');
    displacementMap.setAttribute('scale', '3');
    displacementMap.setAttribute('xChannelSelector', 'R');
    displacementMap.setAttribute('yChannelSelector', 'G');
    
    filter.appendChild(turbulence);
    filter.appendChild(displacementMap);
    defs.appendChild(filter);
    
    // Apply filter to element
    element.style.filter = `url(#${filterId})`;
    
    // Animate the turbulence
    let time = Math.random() * 1000;
    const baseSpeed = 2.02;
    const noiseScale = 3.0;
    
    function animate() {
        time += 0.01 * baseSpeed * noiseScale;
        turbulence.setAttribute('seed', time);
        requestAnimationFrame(animate);
    }
    
    animate();
}

function initWobble() {
    const wobbleElements = document.querySelectorAll('.wobble');
    wobbleElements.forEach((element, elemIndex) => {
        applyWobbleToElement(element, elemIndex);
    });
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWobble);
} else {
    initWobble();
}