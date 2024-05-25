let image_tshirt_1 = document.getElementById('image_tshirt_1');

let right_arrow = document.getElementById('right_arrow');

let left_arrow = document.getElementById('left_arrow');

let tshirts_images = ['../Images/puma_image1-removebg-preview.png', '../Images/puma_image2-removebg-preview.png', '../Images/puma_image3-removebg-preview.png', '../Images/puma_image4-removebg-preview.png', '../Images/puma_image5-removebg-preview.png', '../Images/puma_image6-removebg-preview.png'];
let tshirts_colors1 = ['Black', 'Dark Blue', 'Brown'];
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
    document.getElementById('image_tshirt_1').src = tshirts_images[currentImage1];

    let currentAlt = "Puma T-Shirt";
    document.getElementById('image_tshirt_1').setAttribute('alt', currentAlt + ' ' + tshirts_colors1[currentImage1]);
}   

function onLeftArrowClick1() {
    currentImage1--;
    if(currentImage1 < 0) {
        currentImage1 = 2;
    }
    document.getElementById('image_tshirt_1').src = tshirts_images[currentImage1];

    let currentAlt = "Puma T-Shirt";
    document.getElementById('image_tshirt_1').setAttribute('alt', currentAlt + ' ' + tshirts_colors1[currentImage1]);    
}



//second offer


let image_tshirt_2 = document.getElementById('image_tshirt_2');

let right_arrow2 = document.getElementById('right_arrow2');

let left_arrow2 = document.getElementById('left_arrow2');

let tshirt_images2 = ['../Images/nike_image2-removebg-preview.png', '../Images/nike_image3-removebg-preview.png', '../Images/nike_image4-removebg-preview.png', '../Images/nike_image5-removebg-preview.png', '../Images/nike_image6-removebg-preview.png', '../Images/nike_image7-removebg-preview.png', '../Images/nike_image9-removebg-preview.png', '../Images/nike_image10-removebg-preview.png', '../Images/nike_image11-removebg-preview.png', '../Images/nike_image12-removebg-preview.png'];
let tshirts_colors2 = ['Dark Blue', 'Red', 'Purple', 'Light Blue', 'Dark Blue with White Lines', 'Green', 'Blue', 'Orange', 'Black', 'White'];
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
    if(currentImage2 > 9) {
        currentImage2 = 0;
    }
    document.getElementById('image_tshirt_2').src = tshirt_images2[currentImage2];

    let currentAlt = "Nike Sport T-Shirt";
    document.getElementById('image_tshirt_2').setAttribute('alt', currentAlt + ' ' + tshirts_colors2[currentImage2]);
}   

function onLeftArrowClick2() {
    currentImage2--;
    if(currentImage2 < 0) {
        currentImage2 = 9;
    }
    document.getElementById('image_tshirt_2').src = tshirt_images2[currentImage2];

    let currentAlt = "Nike Sport T-Shirt";
    document.getElementById('image_tshirt_2').setAttribute('alt', currentAlt + ' ' + tshirts_colors2[currentImage2]);
}



//third offer

let image_tshirt_3 = document.getElementById('image_tshirt_3');

let right_arrow3 = document.getElementById('right_arrow3');

let left_arrow3 = document.getElementById('left_arrow3');

let tshirt_images3 = ['../Images/jj_1.png', '../Images/jj_2.png', '../Images/jj_3.png', '../Images/jj_4.png', '../Images/jj_5.png', '../Images/jj_6.png'];
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
    if(currentImage3 > 4) {
        currentImage3 = 0;
    }
    document.getElementById('image_tshirt_3').src = tshirt_images3[currentImage3];
}   

function onLeftArrowClick3() {
    currentImage3--;
    if(currentImage3 < 0) {
        currentImage3 = 2;
    }
    document.getElementById('image_tshirt_3').src = tshirt_images3[currentImage3];
}

