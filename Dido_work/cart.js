let MyCart = document.getElementById("MyCart");

function displayCart() {
    var cart = localStorage.getItem('cart');
    if (cart) {
        cart = JSON.parse(cart);
        MyCart.textContent = `${(cart)}`;
    } else {
        MyCart.textContent = 'Cart is empty';
    }
}
function ResetCart(){
    cart = [];
    localStorage.removeItem("cart");
    MyCart.textContent = "Cart is empty";
}

displayCart();