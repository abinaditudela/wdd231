// Shared functionality across all pages
export function setupMobileMenu() {
    const menuButton = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (menuButton && navMenu) {
        menuButton.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuButton.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
            menuButton.setAttribute('aria-expanded', navMenu.classList.contains('active'));
        });
    }
}

export function setCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

export function setupModal(modalId, openButtonsSelector) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    const closeModal = modal.querySelector('.close-modal');
    const openButtons = document.querySelectorAll(openButtonsSelector);

    function toggleModal(show) {
        if (show) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        } else {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    }

    // Close modal when clicking outside content
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            toggleModal(false);
        }
    });

    // Close modal with button
    if (closeModal) {
        closeModal.addEventListener('click', () => toggleModal(false));
    }

    // Open modal with buttons
    openButtons.forEach(button => {
        button.addEventListener('click', () => toggleModal(true));
    });

    // Close with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            toggleModal(false);
        }
    });

    return {
        toggleModal
    };
}

// Initialize shared functionality when DOM loads
document.addEventListener('DOMContentLoaded', () => {
    setupMobileMenu();
    setCurrentYear();
});