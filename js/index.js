// details of the products that will render on webpage
let products = [{
        name: 'Sun Brown',
        description: 'Beautiful Sun-brown sunglasses for an elegent summer',
        image: 'assets/imgs/Sunglasses_2_Woman_Square_Style_OM0017-H5433G_16_9_Low_Res-scaled.jpg',
        price: 70.5,
    },
    {
        name: 'Sand Kissed',
        description: 'Aamazing looking blur black shades for sunny/cloudy weather',
        image: 'assets/imgs/sunglasses_glasses_sand_124401_2560x1440.jpg',
        price: 10.5,
    },
    {
        name: 'Stranger Things',
        description: 'Custom stranger things glasses for fans',
        image: 'assets/imgs/sunglasses_light_glare_123477_2560x1440.jpg',
        price: 20.0,
    },
    {
        name: 'Ocean Blur',
        description: 'Our cool laminated glass Ocean-blur glasses for 007 fans',
        image: 'assets/imgs/AF238_86ec479f-b781-4774-b28f-382cb9d218d1_1024x1024.jpg',
        price: 45,
    },
    {
        name: 'Ocean blue',
        description: 'Colored and coated for folks who have descided to spend summer on beach',
        image: 'assets/imgs/D1007_11_077_1200.jpg',
        price: 40,
    },
    {
        name: 'Blur-Shade',
        description: 'Blur-Shade for both sunny and cloudy weather.',
        image: 'assets/imgs/hguaplb2gm0scqowbrffva4pk1lbaozv9pnu8hu0gvqobyanjwl0jvl4bpumymqy-.jpg',
        price: 35,
    }
];

// variable defined for local browser storage and html page
let cartProducts = JSON.parse(localStorage.getItem("cartProduct")) || [];
let productsRow = document.querySelector('#products-row');


// for loop to render the products on webpage
for (let i = 0; i < products.length; i++) {
    productsRow.innerHTML += `
      <div class="col-md-4">
        <div class="card border justify-content-center ipad" style="width: 100%">
            <img
                class="card-img-top"
                style="height: 15rem"
                src="${products[i].image}"
                alt="Card image cap"/>
            <div class="card-body">
                <h2>${products[i].name}</h2>
                    <p class="card-text">${products[i].description}</p>
                <h5>Price: ${products[i].price} $</h5>
            </div>
            <div class="card-body">
                <a onclick="addToCart(this, ${i})" class="card-link">Add to Cart</a>
            </div>
         </div>
      </div>
    `;
}

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
            <div class="d-block">
                <div class="media">
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

// add to cart function to add products to cart// with a text shown for two seconds so user has responce 
function addToCart(e, index) {
    e.innerHTML = "You're product is added"
    setTimeout(function () {
        e.innerHTML = "Add to Cart"
    }, 2000)
    cartProducts.push(products[index]);
    localStorage.setItem("cartProduct", JSON.stringify(cartProducts));
    console.log("localStorage" + JSON.parse(localStorage.getItem("cartProduct")));
    updateCart();
}

// variables for products that will show in cart when selected
let cartProductsBox = document.querySelector('#cart-products');
let totalText = document.querySelector('#total');

function updateCart() {
    let cartProductLS = JSON.parse(localStorage.getItem("cartProduct"));
    let total = 0;
    cartProductsBox.innerHTML = '';
    if (cartProductLS) {
        for (let i = 0; i < cartProductLS.length; i++) {
            cartProductsBox.innerHTML += `
        <div>
          <h1>${cartProductLS[i].name}</h1>
          <p>${cartProductLS[i].price}</p>
        </div>
      `;
            total += cartProductLS[i].price;
        }
    }

    totalText.innerHTML = total;
}

// function to clear the data in cart via clear button
function clearCart() {
    localStorage.clear();
    updateCart();
}

// update cart function to invoke at start/refresh of page so the products stay in cart
document.addEventListener("DOMContentLoaded", function (event) {
    updateCart();
});