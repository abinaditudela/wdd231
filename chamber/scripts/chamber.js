// Toggle Navigation Menu
document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('nav-menu').classList.toggle('active');
});

// Weather API Integration
const apiKey = "857456a7252a4af33fdf44440c4ec1d5";//"YOUR_API_KEY";
const city = "Cochabamba";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

async function fetchWeather() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data.main.temp);
    document.getElementById("current-temp").textContent = data.main.temp.toFixed(0) + ` °C`;
    document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.getElementById("weather-description").textContent = capitalizeWords(data.weather[0].description);
}

fetchWeather();

function capitalizeWords(str) {
    return str
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

// Load Spotlights
fetch("data/members.json")
    .then((response) => response.json())
    .then((data) => displaySpotlights(data.members));

function displaySpotlights(members) {
    const spotlightContainer = document.getElementById("spotlight-cards");
    
    // Filtrar miembros con membresía "Gold" o "Premium"
    const filteredMembers = members.filter(
        (member) => member.membership === "Gold" || member.membership === "Premium"
    );
    
    // Asegurarnos de mostrar solo 3 miembros
    filteredMembers.slice(0, 3).forEach((member) => {
        spotlightContainer.innerHTML += `
            <div class="business-card">
                <img src="${member.logo}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
            </div>`;
    });
}

