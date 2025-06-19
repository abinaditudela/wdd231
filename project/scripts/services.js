import { setupModal } from './main.js';

document.addEventListener('DOMContentLoaded', async () => {
    // Load services from JSON
    try {
        const response = await fetch('data/services.json');
        const data = await response.json();
        displayServices(data.services);
    } catch (error) {
        console.error('Error loading services:', error);
        document.querySelector('.services-grid').innerHTML = 
            '<p>Unable to load services. Please try again later.</p>';
    }

    // Setup service modal
    const serviceModal = setupModal('service-modal', '.service-card');
    
    // Handle service card clicks
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('click', function() {
            const serviceId = this.dataset.serviceId;
            loadServiceDetails(serviceId);
        });
    });
});

function displayServices(services) {
    const servicesGrid = document.querySelector('.services-grid');
    
    servicesGrid.innerHTML = services.map(service => `
        <div class="service-card" data-service-id="${service.id}">
            <img src="images/services/${service.image}" alt="${service.name}" loading="lazy">
            <h3>${service.name}</h3>
            <p>${service.shortDescription}</p>
            <button class="learn-more">Learn More</button>
        </div>
    `).join('');
}

async function loadServiceDetails(serviceId) {
    try {
        const response = await fetch('data/services.json');
        const data = await response.json();
        const service = data.services.find(s => s.id === serviceId);
        
        if (service) {
            document.getElementById('modal-title').textContent = service.name;
            document.getElementById('modal-content').innerHTML = `
                <img src="images/${service.image}" alt="${service.name}" loading="lazy">
                <p>${service.description}</p>
                <ul class="service-features">
                    ${service.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            `;
            
            const modalCta = document.querySelector('.modal-cta');
            modalCta.addEventListener('click', () => {
                window.location.href = `index.html#contact?service=${encodeURIComponent(service.name)}`;
            });
        }
    } catch (error) {
        console.error('Error loading service details:', error);
    }
}