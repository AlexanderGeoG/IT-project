let image_shoes_1 = document.getElementById('image_shoes_1');

let right_arrow = document.getElementById('right_arrow');

let left_arrow = document.getElementById('left_arrow');

let shoes_images = ['shoes_11.jpg', 'shoes_12.jpg', 'shoes_13.jpg'];
let currentImage = 0;

function hoverImage() {
    right_arrow.style.display = 'block';
    left_arrow.style.display = 'block';
}

function unhoverImage() {
    right_arrow.style.display = 'none';
    left_arrow.style.display = 'none';
}

function onRightArrowClick() {
    currentImage++;
    if(currentImage > 2) {
        currentImage = 0;
    }
    document.getElementById('image_shoes_1').src = shoes_images[currentImage];
}   

function onLeftArrowClick() {
    currentImage--;
    if(currentImage < 0) {
        currentImage = 2;
    }
    document.getElementById('image_shoes_1').src = shoes_images[currentImage];
}