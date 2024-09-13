const categoryLinks = document.querySelectorAll('.category-link');
const sections = document.querySelectorAll('section');

// Function to hide all sections
function hideAllSections() {
    sections.forEach(section => {
        section.classList.add('hidden');
    });
}
function refreshPage() {
    window.location.reload(); // Refreshes the current page
}
function jumpToBottom(id) {
    const bottom = document.getElementById(id);
    bottom.scrollIntoView({ behavior: "smooth" });
}
// Add event listeners to category links
categoryLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        
        // Hide all sections first
        hideAllSections();
        
        // Get the category from the data-category attribute
        const category = this.getAttribute('data-category');
        
        // Show the selected category section
        const selectedSection = document.getElementById(category);
        if (selectedSection) {
            selectedSection.classList.remove('hidden');
        }
    });
});

// Toggle video container visibility within each section
const toggleButtons = document.querySelectorAll('.toggle-btn');
toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
        const videoContainer = this.closest('section').querySelector('.video-container');
        if (videoContainer.classList.contains('hidden')) {
            videoContainer.classList.remove('hidden');
            this.textContent = 'Hide Videos';
        } else {
            videoContainer.classList.add('hidden');
            this.textContent = 'Show Videos';
        }
    });
});
