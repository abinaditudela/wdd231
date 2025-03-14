// select the DOM elements for output
const lastModified = document.querySelector("#lastModified");
const currentyear = document.querySelector("#currentyear");

// use the date object
const today = new Date();

lastModified.innerHTML = `Last Modified <span class="highli">${document.lastModified}</span>`;

console.log(today.getFullYear());
console.log(today);
console.log(document.lastModified)

currentyear.innerHTML = `<span class="highli">&copy; ${today.getFullYear()}</span>`;

// Array of Temple Objects
// const temples = [
//     {
//       templeName: "Aba Nigeria",
//       location: "Aba, Nigeria",
//       dedicated: "2005, August, 7",
//       area: 11500,
//       imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
//     },
//     {
//       templeName: "Manti Utah",
//       location: "Manti, Utah, United States",
//       dedicated: "1888, May, 21",
//       area: 74792,
//       imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
//     },
//     {
//       templeName: "Payson Utah",
//       location: "Payson, Utah, United States",
//       dedicated: "2015, June, 7",
//       area: 96630,
//       imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
//     },
//     {
//       templeName: "Yigo Guam",
//       location: "Yigo, Guam",
//       dedicated: "2020, May, 2",
//       area: 6861,
//       imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
//     },
//     {
//       templeName: "Washington D.C.",
//       location: "Kensington, Maryland, United States",
//       dedicated: "1974, November, 19",
//       area: 156558,
//       imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
//     },
//     {
//       templeName: "Lima Perú",
//       location: "Lima, Perú",
//       dedicated: "1986, January, 10",
//       area: 9600,
//       imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
//     },
//     {
//       templeName: "Mexico City Mexico",
//       location: "Mexico City, Mexico",
//       dedicated: "1983, December, 2",
//       area: 116642,
//       imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
//     },
//     // Add more temple objects here...
//     {
//       templeName: "Salt Lake Temple",
//       location: "Salt Lake City, Utah, United States",
//       dedicated: "1893, April, 6",
//       area: 253000,
//       imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
//     },
//     {
//       templeName: "Rome Italy",
//       location: "Rome, Italy",
//       dedicated: "2019, March, 10",
//       area: 40400,
//       imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/2-Rome-Temple-2190090.jpg"
//     },
//     {
//       templeName: "Hong Kong China",
//       location: "Hong Kong, China",
//       dedicated: "1996, May, 26",
//       area: 21652,
//       imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/hong-kong-china/400x250/hong-kong-china-temple-lds-39528-wallpaper.jpg"
//     }
//   ];
  
//   // Function to generate temple cards
//   function generateTempleCards(filteredTemples) {
//     const album = document.querySelector(".album");
//     album.innerHTML = ""; // Clear existing content
  
//     filteredTemples.forEach(temple => {
//       const figure = document.createElement("figure");
  
//       const img = document.createElement("img");
//       img.src = temple.imageUrl;
//       img.alt = temple.templeName;
//       img.loading = "lazy";
  
//       const figcaption = document.createElement("figcaption");
//       figcaption.innerHTML = `
//         <h3>${temple.templeName}</h3>
//         <p>Location: ${temple.location}</p>
//         <p>Dedicated: ${temple.dedicated}</p>
//         <p>Area: ${temple.area} sq ft</p>
//       `;
  
//       figure.appendChild(img);
//       figure.appendChild(figcaption);
//       album.appendChild(figure);
//     });
//   }
  
//   // Filter temples based on criteria
//   function filterTemples(criteria) {
//     let filteredTemples;
  
//     switch (criteria) {
//       case "old":
//         filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
//         break;
//       case "new":
//         filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
//         break;
//       case "large":
//         filteredTemples = temples.filter(temple => temple.area > 90000);
//         break;
//       case "small":
//         filteredTemples = temples.filter(temple => temple.area < 10000);
//         break;
//       default:
//         filteredTemples = temples;
//     }
  
//     generateTempleCards(filteredTemples);
//   }
  
//   // Initial load
//   document.addEventListener("DOMContentLoaded", () => {
//     generateTempleCards(temples);
  
//     const menuLinks = document.querySelectorAll(".menu-nav a");
//     menuLinks.forEach(link => {
//       link.addEventListener("click", (event) => {
//         event.preventDefault();
//         menuLinks.forEach(l => l.classList.remove("active"));
//         event.target.classList.add("active");
  
//         const filter = event.target.getAttribute("data-filter");
//         filterTemples(filter);
//       });
//     });
  
//     // Update footer year and last modified date
//     const lastModified = document.querySelector("#lastModified");
//     const currentyear = document.querySelector("#currentyear");
  
//     const today = new Date();
//     lastModified.innerHTML = `Last Modified <span class="highli">${document.lastModified}</span>`;
//     currentyear.innerHTML = `&copy; <span class="highli">${today.getFullYear()}</span>`;
  
//     const menuButton = document.querySelector("#menu-button");
//     const navMenu = document.querySelector(".menu-nav");
  
//     menuButton.addEventListener('click', () => {
//       navMenu.classList.toggle('open');
//       menuButton.classList.toggle('open');
//     });
//   });
  