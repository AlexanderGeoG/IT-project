let MyCart = document.getElementById("MyCart");

function displayCart() {
    var cart = localStorage.getItem('cart');
    if (cart) {
        cart = JSON.parse(cart);
        MyCart.innerHTML = '';
        if (cart.length > 0) {
            for(let item of cart){
                let cartItem = document.createElement('div');
                cartItem.classList.add('cart-item');

                let img = document.createElement('img');
                img.src = item.image;
                cartItem.appendChild(img);

                let details = document.createElement('div');
                details.classList.add('cart-item-details');

                let name = document.createElement('h3');
                name.classList.add('cart-item-name');
                name.textContent = item.name;
                details.appendChild(name);

                let price = document.createElement('p');
                price.classList.add('cart-item-price');
                price.textContent = item.price;
                details.appendChild(price);

                cartItem.appendChild(details);

                MyCart.appendChild(cartItem);
            }
        } else {
            MyCart.textContent = 'Cart is empty';
        }
    } else {
        MyCart.textContent = 'Cart is empty';
    }
}
function ResetCart(){
    cart = [];
    localStorage.removeItem("cart");
    localStorage.removeItem("images");
    MyCart.innerHTML = '';
}

displayCart();