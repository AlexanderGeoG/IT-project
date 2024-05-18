// add a product to the cart
function AddtoCart(product) {
    let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    cart.push(product.alt);
    localStorage.setItem('cart', JSON.stringify(cart));

    let myh1 = document.createElement("h1");
    myh1.textContent = "Added to cart";
    document.body.appendChild(myh1);

    //get image
    let img = String(product.src);
    let images = localStorage.getItem('images') ? JSON.parse(localStorage.getItem('images')) : [];
    images.push(img);
    localStorage.setItem('images', JSON.stringify(images));
}
