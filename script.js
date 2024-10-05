// Exoplanet data
const exoplanets = [
    {
      
        name: "Kepler-186f",
        imageUrl: "https://i.redd.it/ken2kmkz9w811.jpg",
        description: "Kepler-186f is the first Earth-size planet found in the habitable zone.",
        distance: "500 light years",
        mass: "1.11 Earth masses",
        discoveryMethod: "Transit",
        discoveryYear: 2014
    },
    {
        name: "TRAPPIST-1e",
        imageUrl: "https://ourplnt.com/wp-content/uploads/2018/05/TRAPPIST-1e-artist-conception.jpg",
        description: "One of seven rocky planets in the TRAPPIST-1 system.",
        distance: "39.5 light years",
        mass: "0.92 Earth masses",
        discoveryMethod: "Transit",
        discoveryYear: 2017
    },
    {
        name: "Proxima Centauri b",
        imageUrl: "https://tse3.mm.bing.net/th?id=OIP.Q70noAc9vcvVNqNfRGFYZwHaEK&pid=Api&P=0&h=180",
        description: "Located in the habitable zone of the closest star to the Sun.",
        distance: "4.2 light years",
        mass: "1.27 Earth masses",
        discoveryMethod: "Radial Velocity",
        discoveryYear: 2016
    },
    {
        name: "HD 209458 b",
        imageUrl: "https://www.universetoday.com/wp-content/uploads/2014/07/14-197.jpg",
        description: "HD 209458 b was the first exoplanet found to transit its star.",
        distance: "159 light years",
        mass: "0.69 Jupiter masses",
        discoveryMethod: "Transit",
        discoveryYear: 1999
    },
    {
        name: "Gliese 581d",
        imageUrl: "https://cdn.shopify.com/s/files/1/0742/7719/1954/files/gliese-581d-4_1024x1024.jpg?v=1682464844",
        description: "A potentially habitable planet in the Gliese 581 system.",
        distance: "20.3 light years",
        mass: "5.6 Earth masses",
        discoveryMethod: "Radial Velocity",
        discoveryYear: 2007
    },
    {
        name: "WASP-12b",
        imageUrl: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/09/exoplaneta2.png",
        description: "WASP-12b is one of the darkest exoplanets known.",
        distance: "1410 light years",
        mass: "1.41 Jupiter masses",
        discoveryMethod: "Transit",
        discoveryYear: 2008
    },
    {
        name: "CoRoT-7b",
        imageUrl: "https://media.sketchfab.com/models/32843a5eea174d7bb663ac1af710a215/thumbnails/fda6dc7714064d9395156d50e4c42baf/1024x576.jpeg",
        description: "One of the first exoplanets discovered to have a rocky composition.",
        distance: "489 light years",
        mass: "4.8 Earth masses",
        discoveryMethod: "Transit",
        discoveryYear: 2009
    },
    {
        name: "GJ 1214b",
        imageUrl: "https://i.ytimg.com/vi/ySWfTunZfqk/maxresdefault.jpg",
        description: "GJ 1214b is a water world located 40 light years from Earth.",
        distance: "40 light years",
        mass: "6.55 Earth masses",
        discoveryMethod: "Transit",
        discoveryYear: 2009
    },
    {
        name: "Kepler-442b",
        imageUrl: "https://i.ytimg.com/vi/uijz5RdSFKs/hqdefault.jpg",
        description: "Kepler-442b is a potentially habitable Earth-sized planet.",
        distance: "1200 light years",
        mass: "2.36 Earth masses",
        discoveryMethod: "Transit",
        discoveryYear: 2015
    },
    {
        name: "Kepler-22b",
        imageUrl: "https://exoplanets.nasa.gov/system/planets/planet_images/1599_Kepler22b.jpg",
        description: "Kepler-22b was the first planet found in the habitable zone of a Sun-like star.",
        distance: "600 light years",
        mass: "2.4 Earth masses",
        discoveryMethod: "Transit",
        discoveryYear: 2011
    },
    {
        name: "K2-18b",
        imageUrl: "https://tse3.mm.bing.net/th?id=OIP.KxnW39CwVUcgWqr_9ie0cQHaEK&pid=Api&P=0&h=180",
        description: "K2-18b is a super-Earth in the habitable zone.",
        distance: "124 light years",
        mass: "8.63 Earth masses",
        discoveryMethod: "Transit",
        discoveryYear: 2015
    },
    {
        name: "55 Cancri e",
        imageUrl: "https://images.fineartamerica.com/images-medium-large-5/55-cancri-e-exoplanet-nasajpl-caltechscience-photo-library.jpg",
        description: "55 Cancri e is a super-Earth with lava flows on its surface.",
        distance: "41 light years",
        mass: "8.63 Earth masses",
        discoveryMethod: "Transit",
        discoveryYear: 2004
    },
    {
        name: "LHS 1140b",
        imageUrl: "https://digiazoom.ir/wp-content/uploads/2024/07/20240709_135402_1838823516-910x600-1.jpg",
        description: "LHS 1140b is a super-Earth located 40 light years away.",
        distance: "40 light years",
        mass: "6.98 Earth masses",
        discoveryMethod: "Transit",
        discoveryYear: 2017
    },
    {
        name: "TOI-1338 b",
        imageUrl: "https://images.poplady-mag.com/wp-content/uploads/2021/02/d83dee17.jpg",
        description: "TOI-1338 b is a circumbinary planet that orbits two stars.",
        distance: "1300 light years",
        mass: "N/A",
        discoveryMethod: "Transit",
        discoveryYear: 2020
    },
    {
        name: "HD 189733b",
        imageUrl: "https://isolatedtraveller.com/wp-content/uploads/2016/11/hd189733b_nasa4x3.jpg",
        description: "HD 189733b is one of the most studied hot Jupiters.",
        distance: "64.5 light years",
        mass: "1.13 Jupiter masses",
        discoveryMethod: "Transit",
        discoveryYear: 2005
    },
    // Continue adding the rest of the planets...
];

// Function to display exoplanets dynamically
function displayExoplanets() {
    const planetGrid = document.getElementById('planet-grid');

    exoplanets.forEach(planet => {
        const planetCard = document.createElement('div');
        planetCard.classList.add('planet-card');

        planetCard.innerHTML = `
            <img src="${planet.imageUrl}" alt="${planet.name}">
            <div class="planet-details">
                <h2>${planet.name}</h2>
                <p>${planet.description}</p>
                <p><strong>Distance:</strong> ${planet.distance}</p>
                <p><strong>Mass:</strong> ${planet.mass}</p>
                <p><strong>Discovery Method:</strong> ${planet.discoveryMethod}</p>
                <p><strong>Discovery Year:</strong> ${planet.discoveryYear}</p>
            </div>
        `;

        planetGrid.appendChild(planetCard);
    });
}

// Call function on page load
window.onload = displayExoplanets;
