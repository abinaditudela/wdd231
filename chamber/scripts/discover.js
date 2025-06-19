document.addEventListener('DOMContentLoaded', function() {
    // Set last modified date
    document.getElementById('lastModified').textContent = document.lastModified;
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Mobile menu toggle
    const menuButton = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    menuButton.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuButton.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
    });
    
    // Load attractions from JSON
    fetch('data/attractions.json')
        .then(response => response.json())
        .then(data => {
            const grid = document.getElementById('attractions-grid');
            
            data.attractions.forEach((attraction, index) => {
                const card = document.createElement('article');
                card.className = 'attraction-card';
                card.id = `card${index + 1}`;
                
                card.innerHTML = `
                    <figure>
                        <img src="${attraction.image}" alt="${attraction.name}" loading="lazy">
                    </figure>
                    <div class="card-content">
                        <h3>${attraction.name}</h3>
                        <address>${attraction.address}</address>
                        <p>${attraction.description}</p>
                        <a href="#" class="learn-more">Learn More</a>
                    </div>
                `;
                
                grid.appendChild(card);
            });
        })
        .catch(error => console.error('Error loading attractions:', error));
    
    // Visit message functionality
    const visitMessage = document.getElementById('visit-message');
    const lastVisit = localStorage.getItem('lastVisit');
    const currentDate = Date.now();
    
    if (!lastVisit) {
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const daysBetween = Math.floor((currentDate - lastVisit) / (1000 * 60 * 60 * 24));
        
        if (daysBetween === 0) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else {
            const dayText = daysBetween === 1 ? "day" : "days";
            visitMessage.textContent = `You last visited ${daysBetween} ${dayText} ago.`;
        }
    }
    
    localStorage.setItem('lastVisit', currentDate.toString());
});