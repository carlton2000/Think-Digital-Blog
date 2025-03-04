const countdownDisplay = document.getElementById('countdown');
const launchDate = new Date('2024-12-31T00:00:00').getTime(); // Set your launch date

function updateCountdown() {
    const now = new Date().getTime();
    const distance = launchDate - now;

    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownDisplay.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
        countdownDisplay.innerHTML = 'Launched!';
        clearInterval(countdownInterval);
    }
}

updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);

document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    // Here you would typically send the email to your backend for storage.
    console.log('Email submitted:', email);
    alert('Thank you! We will notify you.');
    document.getElementById('email').value = "";
});