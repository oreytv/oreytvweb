document.querySelectorAll('.toggle-link').forEach(link => {
    const content = link.nextElementSibling;

    link.addEventListener('click', e => {
        e.preventDefault();

        if (content.style.height && content.style.height !== '0px') {
            content.style.height = '0px';
            content.classList.remove('active');
        } else {
            content.style.height = content.scrollHeight + 'px';
            content.classList.add('active');
        }
    });

    window.addEventListener('resize', () => {
        if (content.classList.contains('active')) {
            content.style.height = content.scrollHeight + 'px';
        }
    });
});
