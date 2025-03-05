const countdownDisplay = document.getElementById('countdown');
const launchDate = new Date('2024-12-31T00:00:00').getTime(); // Set your launch date

document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    // Here you would typically send the email to your backend for storage.
    console.log('Email submitted:', email);
    alert('Thank you! We will notify you.');
    document.getElementById('email').value = "";
});

const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active');
    navMenu.classList.toggle('show');
    console.log("button was clicked")
})