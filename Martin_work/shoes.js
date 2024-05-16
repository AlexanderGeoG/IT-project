let image_shoes_1 = document.getElementById('image_shoes_1');

let right_arrow = document.getElementById('right_arrow');

let left_arrow = document.getElementById('left_arrow');

let shoes_images = ['../Images/shoes_11.jpg', '../Images/shoes_12.jpg', '../Images/shoes_13.jpg'];
let currentImage = 0;

function hoverImage1() {
    right_arrow.style.display = 'block';
    left_arrow.style.display = 'block';
}

function unhoverImage1() {
    right_arrow.style.display = 'none';
    left_arrow.style.display = 'none';
}

function onRightArrowClick1() {
    currentImage++;
    if(currentImage > 2) {
        currentImage = 0;
    }
    document.getElementById('image_shoes_1').src = shoes_images[currentImage];
}   

function onLeftArrowClick1() {
    currentImage--;
    if(currentImage < 0) {
        currentImage = 2;
    }
    document.getElementById('image_shoes_1').src = shoes_images[currentImage];
}

//second offer


let image_shoes_2 = document.getElementById('image_shoes_2');

let right_arrow2 = document.getElementById('right_arrow2');

let left_arrow2 = document.getElementById('left_arrow2');

let shoes_images2 = ['../Images/shoes_21.jpg ', '../Images/shoes_22.jpg', '../Images/shoes_23.jpg'];
let currentImage2 = 0;

function hoverImage2() {
    right_arrow2.style.display = 'block';
    left_arrow2.style.display = 'block';
}

function unhoverImage2() {
    right_arrow2.style.display = 'none';
    left_arrow2.style.display = 'none';
}

function onRightArrowClick2() {
    currentImage2++;
    if(currentImage2 > 2) {
        currentImage2 = 0;
    }
    document.getElementById('image_shoes_2').src = shoes_images2[currentImage2];
}   

function onLeftArrowClick2() {
    currentImage2--;
    if(currentImage2 < 0) {
        currentImage2 = 2;
    }
    document.getElementById('image_shoes_2').src = shoes_images2[currentImage2];
}