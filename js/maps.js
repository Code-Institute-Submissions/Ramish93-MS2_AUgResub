function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: {
            lat: 59.3293,
            lng: 18.0686
        },
    });
    // Create an array of alphabetical characters used to label the markers.
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    const markers = locations.map((location, i) => {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length],
        });
    });
    // Add a marker clusterer to manage the markers.
    new MarkerClusterer(map, markers, {
        imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
}
const locations = [{
        lat: 59.3689,
        lng: 18.0084
    },
    {
        lat: 59.3036,
        lng: 18.0065
    },
    {
        lat: 59.1954,
        lng: 17.6257
    },
]