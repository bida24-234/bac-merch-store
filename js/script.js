// Mobile Menu Toggle (Bootstrap handles most, but ensure custom toggle works)
document.querySelector('.navbar-toggler').addEventListener('click', () => {
    document.querySelector('#navbarNav').classList.toggle('show');
});

// FAQ Toggle
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const faqItem = item.parentElement;
        faqItem.classList.toggle('active');
    });
});

// Form Validation
document.getElementById('feedback-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    const terms = document.getElementById('terms').checked;

    if (!name || !email || !subject || !message || !terms) {
        alert('Please fill in all required fields and agree to the terms.');
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Form submitted successfully!'); // Replace with actual submission logic if needed
});