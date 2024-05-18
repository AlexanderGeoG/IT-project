// add a product to the cart
function AddtoCart(product, priceId) {
    let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    cart.push({name: product.alt, image: product.src, price: document.getElementById(priceId).textContent});
    localStorage.setItem('cart', JSON.stringify(cart));

    let myh1 = document.createElement("h1");
    myh1.textContent = "Added to cart";
    document.body.appendChild(myh1);
}
