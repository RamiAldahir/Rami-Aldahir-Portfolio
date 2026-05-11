const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        console.log(`Navigating to ${link.textContent}`);
    });
});