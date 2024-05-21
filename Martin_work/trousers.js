//fisrt offer
let image_tr_1 = document.getElementById('image_tr_1');

let right_arrow = document.getElementById('right_arrow');

let left_arrow = document.getElementById('left_arrow');

let trs_images1 = ['../Images/trousers_11.jpg', '../Images/trousers_12.jpg', '../Images/trousers_13.jpg'];
let trs_color1 = ['Dark Red', 'Grey', 'White'];
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
    document.getElementById('image_tr_1').src = trs_images1[currentImage1];

    
    let currentAlt = "Mens Fashion Athletic Joggers Pants";
    document.getElementById('image_tr_1').setAttribute('alt', currentAlt + ' ' + trs_color1[currentImage1]);
}   

function onLeftArrowClick1() {
    currentImage1--;
    if(currentImage1 < 0) {
        currentImage1 = 2;
    }
    document.getElementById('image_tr_1').src = trs_images1[currentImage1];

    let currentAlt = "Mens Fashion Athletic Joggers Pants Dark";
    document.getElementById('image_tr_1').setAttribute('alt', currentAlt + ' ' + trs_color1[currentImage1]);
}



//second offer


let image_tr_2 = document.getElementById('image_tr_2');

let right_arrow2 = document.getElementById('right_arrow2');

let left_arrow2 = document.getElementById('left_arrow2');

let tr_images2 = ['../Images/trousers_21.jpg', '../Images/trousers_22.jpg', '../Images/trousers_23.jpg'];
let trs_color2 = ['Light Green', 'Black', 'Grey'];
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
    document.getElementById('image_tr_2').src = tr_images2[currentImage2];

    let currentAlt = "Essentials Men's Classic-Fit Wrinkle-Resistant Flat-Front Chino Pants";
    document.getElementById('image_tr_2').setAttribute('alt', currentAlt + ' ' + trs_color2[currentImage2]);
}   

function onLeftArrowClick2() {
    currentImage2--;
    if(currentImage2 < 0) {
        currentImage2 = 2;
    }
    document.getElementById('image_tr_2').src = tr_images2[currentImage2];

    let currentAlt = "Essentials Men's Classic-Fit Wrinkle-Resistant Flat-Front Chino Pants";
    document.getElementById('image_tr_2').setAttribute('alt', currentAlt + ' ' + trs_color2[currentImage2]);
}



//third offer

let image_tr_3 = document.getElementById('image_tr_3');

let right_arrow3 = document.getElementById('right_arrow3');

let left_arrow3 = document.getElementById('left_arrow3');

let tr_images3 = ['../Images/trousers_31.jpg', '../Images/trousers_32.jpg', '../Images/trousers_33.jpg'];
let trs_color3 = ['Blue', 'White', 'Dark Red'];
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
    document.getElementById('image_tr_3').src = tr_images3[currentImage3];

    let currentAlt = "Men's Casual Drawstring Pants Regular Fit Elastic Waist Cotton Basic Straight Leg Cargo Pants";
    document.getElementById('image_tr_3').setAttribute('alt', currentAlt + ' ' + trs_color3[currentImage3]);
}   

function onLeftArrowClick3() {
    currentImage3--;
    if(currentImage3 < 0) {
        currentImage3 = 2;
    }
    document.getElementById('image_tr_3').src = tr_images3[currentImage3];

    let currentAlt = "Men's Casual Drawstring Pants Regular Fit Elastic Waist Cotton Basic Straight Leg Cargo Pants";
    document.getElementById('image_tr_3').setAttribute('alt', currentAlt + ' ' + trs_color3[currentImage3]);
}

function AddProduct(){
    
}