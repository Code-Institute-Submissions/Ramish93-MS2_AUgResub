// map code snippet copied from google maps documentation, added custom locations,id.

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
];

// details of the userexperince that will render on webpage

let user = [{
        name: 'John Shan',
        comment: 'Beautiful Sun-brown sunglasses for an elegent summer',
        image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        media: 'Facebook'
    },
    {
        name: 'Joe Slevin',
        comment: "The most amazing experience that i've ever had with a custom made thing",
        image: 'https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3V5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',

        media: 'Twitter'
    },
    {
        name: 'Allison Dsuza',
        comment: "I'm totally in love with my new look.",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGyjaasIFDAnXEWyfVmoXpV1-bgPsTfHxonQ&usqp=CAU',
        media: 'Instagram'
    },
    {
        name: 'Craig Strongman',
        comment: 'OMG! toatally loving them. they were a littel late but worth it',
        image: 'https://thumbs.dreamstime.com/b/judgement-young-guy-college-student-show-thumbs-up-thumb-down-average-rate-making-decision-like-dislike-standing-over-white-223076359.jpg',
        media: 'Facebook'
    }
]

let users = document.querySelector('#userRow')

for (let i = 0; i < user.length; i++) {
    users.innerHTML += `
    <div class="col-md-6 col-sm-8">
        <div class="d-block mt-3 ">
            <div class="media mt-3">
                <div class="d-none d-sm-block">
                    <img src="${user[i].image}" alt="image of a person" class="rounded-circle mr-3" height=80
                    width=80>
                </div>
                <div class="media-body">
                    <div class="feedback">
                        <p>${user[i].comment}</p>
                        <footer>${user[i].name} on <strong title="${user[i].media}"> <em> ${user[i].media}
                                </em></strong>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    </div>`
}