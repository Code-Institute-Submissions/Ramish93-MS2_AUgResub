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
]

let productsRow = document.querySelector('#products-row')

for (let i = 0; i < products.length; i++) {
    productsRow.innerHTML += `
          <div class="col-md-4">
            <div class="card border card-margin" style="width: 22rem">
                            <img
                                class="card-img-top"
                                style="height: 15rem"
                                src="${products[i].image}"
                                alt="Card image cap"
                            />
                            <div class="card-body">
                                <h2>${products[i].name}</h2>
                                <p class="card-text">${products[i].description}</p>
                                <h5>Price: ${products[i].price} $</h5>

                            </div>
                            <div class="card-body">
                                <a onclick="addToCart(${i})" class="card-link">Add to Cart</a>
                            </div>
                        </div>
          </div>
        `
}

function addToCart(index) {
    cartProducts.push(products[index])
    updateCart()
}

let cartProducts = []
let cartProductsBox = document.querySelector('#cart-products')
let totalText = document.querySelector('#total')

function updateCart() {
    let total = 0
    cartProductsBox.innerHTML = ''
    for (let i = 0; i < cartProducts.length; i++) {
        cartProductsBox.innerHTML += `
            <div>
              <h1>${cartProducts[i].name}</h1>
              <p>${cartProducts[i].price}</p>  
            </div>
          `
        total += cartProducts[i].price
    }

    totalText.innerHTML = total
}