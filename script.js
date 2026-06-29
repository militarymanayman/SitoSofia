// Get modal elements
const modal = document.getElementById('giftModal');
const giftBtn = document.getElementById('giftBtn');
const closeBtn = document.getElementById('closeBtn');

// Open modal when gift button is clicked
giftBtn.addEventListener('click', function() {
    modal.classList.add('show');
});

// Close modal when close button is clicked
closeBtn.addEventListener('click', function() {
    modal.classList.remove('show');
});

// Close modal when clicking outside the modal content
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.classList.remove('show');
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.classList.contains('show')) {
        modal.classList.remove('show');
    }
});
