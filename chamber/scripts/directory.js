document.addEventListener("DOMContentLoaded", () => {
    const directoryContainer = document.getElementById("businesses");
    const toggleButton = document.getElementById("toggleView");
    let isCardView = true; // Vista inicial

    // Función para cargar los datos
    const loadBusinesses = () => {
        fetch("data/directory.json")
            .then(response => response.json())
            .then(data => {
                directoryContainer.innerHTML = ""; // Limpiar el contenedor
                data.businesses.forEach(business => {
                    const card = document.createElement("div");
                    card.classList.add("business-card");
                    card.innerHTML = `
                        <img src="${business.logo}" alt="${business.name}">
                        <h3>${business.name}</h3>
                        <p>Category: ${business.category}</p>
                        <p>Address: ${business.address}</p>
                        <p>Phone: 📞 ${business.phone}</p>
                    `;
                    directoryContainer.appendChild(card);
                });
            })
            .catch(error => console.error("Error loading directory:", error));
    };

    // Función para alternar vistas
    const toggleView = () => {
        isCardView = !isCardView;
        directoryContainer.className = isCardView ? "card-view" : "list-view";
        toggleButton.textContent = isCardView ? "Switch to List View" : "Switch to Card View";
    };

    // Evento del botón para cambiar la vista
    toggleButton.addEventListener("click", toggleView);

    // Cargar datos al inicio
    loadBusinesses();

    // Mostrar el año actual
    document.getElementById("currentYear").textContent = new Date().getFullYear();
});
