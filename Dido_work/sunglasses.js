let image_sunglasses_1 = document.getElementById('image_sunglasses_1');

let right_arrow = document.getElementById('right_arrow');

let left_arrow = document.getElementById('left_arrow');

function hoverImage1() {
    right_arrow.style.display = 'block';
    left_arrow.style.display = 'block';
}

function unhoverImage1() {
    right_arrow.style.display = 'none';
    left_arrow.style.display = 'none';
}

let currentImage = 0;
let images = ["sunglasses1.1.png", "sunglasses1.2.png", "sunglasses1.3.png"];

function RigthArrow(){
    currentImage++;
    if(currentImage > 2){
        currentImage = 0;
    }
    document.getElementById("image_sunglasses_1").src = images[currentImage];
}

function LeftArrow(){
    currentImage--;
    if(currentImage < 0){
        currentImage = 2;
    }
    document.getElementById("image_sunglasses_1").src = images[currentImage];
}

//adding the products array to local storage
let cart = []

function AddtoCart(){
    product = image_sunglasses_1.alt;
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    let myh1 = document.createElement("h1");
    myh1.textContent = "Added to cart";
    document.body.appendChild(myh1);
}