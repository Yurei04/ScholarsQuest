//JSON Map
var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

function loadMarkers(data) {
    data.markers.forEach(marker => {
        L.marker([marker.lat, marker.lng])
            .addTo(map)
            .bindPopup(marker.popup);
    });
}

fetch("../../BACKEND/MODELS/mapData.json")
    .then(response => response.json())
    .then(data => {
        loadMarkers(data); // Call the function to add markers to the map
    })
    .catch(error => console.error('Error loading the JSON file:', error));
