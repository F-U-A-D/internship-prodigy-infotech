window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#222'; // Darker background on scroll
    } else {
        navbar.style.backgroundColor = '#333'; // Original background
    }
});
