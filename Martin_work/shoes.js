let image_shoes_1 = document.getElementById('image_shoes_1');

let right_arrow = document.getElementById('right_arrow');

let left_arrow = document.getElementById('left_arrow');

let shoes_images1 = ['../Images/shoes_11.jpg', '../Images/shoes_12.jpg', '../Images/shoes_13.jpg'];
let shoes_color1 = ['Beige', 'Green', 'White with Black'];
let currentImage1 = 0;

function hoverImage1() {
    right_arrow.style.display = 'block';
    left_arrow.style.display = 'block';
}

function unhoverImage1() {
    right_arrow.style.display = 'none';
    left_arrow.style.display = 'none';
}

function onRightArrowClick1() {
    currentImage1++;
    if(currentImage1 > 2) {
        currentImage1 = 0;
    }
    document.getElementById('image_shoes_1').src = shoes_images1[currentImage1];

    let currentAlt = "New Balance Men's Fresh Foam Roav V1 Classic Sneaker";
    document.getElementById('image_shoes_1').setAttribute('alt', currentAlt + ' ' + shoes_color1[currentImage1]);
}   

function onLeftArrowClick1() {
    currentImage1--;
    if(currentImage1 < 0) {
        currentImage1 = 2;
    }
    document.getElementById('image_shoes_1').src = shoes_images1[currentImage1];

    let currentAlt = "New Balance Men's Fresh Foam Roav V1 Classic Sneaker";
    document.getElementById('image_shoes_1').setAttribute('alt', currentAlt + ' ' + shoes_color1[currentImage1]);
}



//second offer


let image_shoes_2 = document.getElementById('image_shoes_2');

let right_arrow2 = document.getElementById('right_arrow2');

let left_arrow2 = document.getElementById('left_arrow2');

let shoes_images2 = ['../Images/shoes_21.jpg ', '../Images/shoes_22.jpg', '../Images/shoes_23.jpg'];
let shoes_color2 = ['Light Brown', 'Yellow with Light Red', 'White'];
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

    let currentAlt = "Nike Air Jordan 1";
    document.getElementById('image_shoes_2').setAttribute('alt', currentAlt + ' ' + shoes_color2[currentImage2]);
}   

function onLeftArrowClick2() {
    currentImage2--;
    if(currentImage2 < 0) {
        currentImage2 = 2;
    }
    document.getElementById('image_shoes_2').src = shoes_images2[currentImage2];

    let currentAlt = "Nike Air Jordan 1";
    document.getElementById('image_shoes_2').setAttribute('alt', currentAlt + ' ' + shoes_color2[currentImage2]);
}



//third offer

let image_shoes_3 = document.getElementById('image_shoes_3');

let right_arrow3 = document.getElementById('right_arrow3');

let left_arrow3 = document.getElementById('left_arrow3');

let shoes_images3 = ['../Images/shoes_31.jpg ', '../Images/shoes_32.jpg', '../Images/shoes_33.jpg'];
let shoes_color3 = ['Green', 'White', 'Dark'];
let currentImage3 = 0;

function hoverImage3() {
    right_arrow3.style.display = 'block';
    left_arrow3.style.display = 'block';
}

function unhoverImage3() {
    right_arrow3.style.display = 'none';
    left_arrow3.style.display = 'none';
}

function onRightArrowClick3() {
    currentImage3++;
    if(currentImage3 > 2) {
        currentImage3 = 0;
    }
    document.getElementById('image_shoes_3').src = shoes_images3[currentImage3];
    let currentAlt = 'Nike Air Max';
    document.getElementById('image_shoes_3').setAttribute('alt', currentAlt + ' ' + shoes_color3[currentImage3]);
    
}   

function onLeftArrowClick3() {
    currentImage3--;
    if(currentImage3 < 0) {
        currentImage3 = 2;
    }
    document.getElementById('image_shoes_3').src = shoes_images3[currentImage3];
    let currentAlt = 'Nike Air Max';
    document.getElementById('image_shoes_3').setAttribute('alt', currentAlt + ' ' + shoes_color3[currentImage3]);
}
