let MyCart = document.getElementById("MyCart");

function displayCart() {
    var cart = localStorage.getItem('cart');
    if (cart) {
        cart = JSON.parse(cart);
        MyCart.textContent = `${(cart)}`;
    } else {
        MyCart.textContent = 'Cart is empty';
    }
    let images = localStorage.getItem("images");
    images = images ? JSON.parse(images) : [];
    

    for(let imageSrc of images){
        let img = document.createElement("img");
        img.src = imageSrc;
        MyCart.appendChild(img);
    }
} 

function ResetCart(){
    cart = [];
    localStorage.removeItem("cart");
    localStorage.removeItem("images");
    MyCart.innerHTML = '';
}

displayCart();