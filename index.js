const pageBtn = document.getElementById('page-btn');
const navLinks = document.querySelector('.nav-links');

pageBtn.addEventListener('mouseover', () => {
    navLinks.style.right = '0';
});

navLinks.addEventListener('mouseleave', () => {
    navLinks.style.right = '-250px';
});
