// add a product to the cart
function AddtoCart(product, priceId, button_id) {
    let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    cart.push({name: product.alt, image: product.src, price: document.getElementById(priceId).textContent});
    localStorage.setItem('cart', JSON.stringify(cart));


    document.getElementById(button_id).innerHTML = 'Added product';
    document.getElementById(button_id).style.backgroundColor = '';
    document.getElementById(button_id).style.backgroundColor = 'hsl(120, 80%, 21%)';

    setTimeout(() => {
        document.getElementById(button_id).innerHTML = 'Add to cart';
        document.getElementById(button_id).style.backgroundColor = '';
    }, 1000)
}
