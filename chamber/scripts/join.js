document.addEventListener('DOMContentLoaded', function() {
    // Set form timestamp
    document.getElementById('timestamp').value = new Date().toISOString();
    
    // Mobile menu toggle
    const menuButton = document.getElementById('menu-toggle');
    const nav = document.querySelector('nav');
    
    if (menuButton) {
        menuButton.addEventListener('click', () => {
            nav.classList.toggle('active');
            menuButton.textContent = nav.classList.contains('active') ? '✕' : '☰';
        });
    }
    
    // Initialize all modals
    const modals = {
        np: document.getElementById('np-modal'),
        bronze: document.getElementById('bronze-modal'),
        silver: document.getElementById('silver-modal'),
        gold: document.getElementById('gold-modal')
    };
    
    // Add click events to info buttons
    document.querySelectorAll('.info-btn').forEach(button => {
        button.addEventListener('click', () => {
            const level = button.closest('.card').dataset.level;
            if (modals[level]) {
                modals[level].showModal();
            }
        });
    });
    
    // Close modal buttons
    document.querySelectorAll('.close-btn').forEach(button => {
        button.addEventListener('click', () => {
            button.closest('dialog').close();
        });
    });
    
    // Close modal when clicking outside
    document.querySelectorAll('dialog').forEach(dialog => {
        dialog.addEventListener('click', (e) => {
            if (e.target === dialog) {
                dialog.close();
            }
        });
    });
    
    // Form validation for title field
    const form = document.getElementById('join-form');
    const titleInput = document.querySelector('input[name="title"]');
    
    if (form && titleInput) {
        form.addEventListener('submit', (e) => {
            if (titleInput.value && !/^[a-zA-Z\- ]{7,}$/.test(titleInput.value)) {
                e.preventDefault();
                alert('Title must be at least 7 characters (letters, hyphens or spaces only)');
                titleInput.focus();
            }
        });
    }
});