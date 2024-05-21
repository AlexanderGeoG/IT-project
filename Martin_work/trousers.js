let image_tr_1 = document.getElementById('image_tshirt_1');

let right_arrow = document.getElementById('right_arrow');

let left_arrow = document.getElementById('left_arrow');

let trs_images = ['../Images/trousers_11.jpg', '../Images/trousers_12.jpg', '../Images/trousers_13.jpg'];
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
    document.getElementById('image_tr_1').src = trs_images[currentImage];
}   

function onLeftArrowClick1() {
    currentImage--;
    if(currentImage < 0) {
        currentImage = 2;
    }
    document.getElementById('image_tr_1').src = trs_images[currentImage];
}



//second offer


let image_tr_2 = document.getElementById('image_tshirt_2');

let right_arrow2 = document.getElementById('right_arrow2');

let left_arrow2 = document.getElementById('left_arrow2');

let tr_images2 = ['../Images/qki_pantalonki1-removebg-preview', '../Images/qki_pantalonki2-removebg-preview', '../Images/nike_image3-removebg-preview.png', '../Images/nike_image4-removebg-preview.png', '../Images/nike_image5-removebg-preview.png', '../Images/nike_image6-removebg-preview.png', '../Images/nike_image7-removebg-preview.png', '../Images/nike_image8-removebg-preview.png', '../Images/nike_image9-removebg-preview.png', '../Images/nike_image10-removebg-preview.png', '../Images/nike_image11-removebg-preview.png', '../Images/nike_image12-removebg-preview.png'];
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
    if(currentImage2 > 11) {
        currentImage2 = 0;
    }
    document.getElementById('image_tr_2').src = tr_images2[currentImage2];
}   

function onLeftArrowClick2() {
    currentImage2--;
    if(currentImage2 < 0) {
        currentImage2 = 2;
    }
    document.getElementById('image_tr_2').src = tr_images2[currentImage2];
}



//third offer

let image_tr_3 = document.getElementById('image_tr_3');

let right_arrow3 = document.getElementById('right_arrow3');

let left_arrow3 = document.getElementById('left_arrow3');

let tr_images3 = ['../Images/wolf_image1-removebg-preview.png', '../Images/wolf_image2-removebg-preview.png', '../Images/wolf_image3-removebg-preview.png', '../Images/wolf_image4-removebg-preview.png', '../Images/wolf_image5-removebg-preview.png'];
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
    document.getElementById('image_tr_3').src = tr_images3[currentImage3];
}   

function onLeftArrowClick3() {
    currentImage3--;
    if(currentImage3 < 0) {
        currentImage3 = 2;
    }
    document.getElementById('image_tr_3').src = tr_images3[currentImage3];
}

function AddProduct(){
    
}