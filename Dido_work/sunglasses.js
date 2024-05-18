let image_sunglasses_1 = document.getElementById('image_sunglasses_1');

let right_arrow1 = document.getElementById('right_arrow1');

let left_arrow1 = document.getElementById('left_arrow1');

function hoverImage1() {
    right_arrow1.style.display = 'block';
    left_arrow1.style.display = 'block';
}

function unhoverImage1() {
    right_arrow1.style.display = 'none';
    left_arrow1.style.display = 'none';
}

let currentImage = 0;
let images1 = ["sunglasses1.1.png", "sunglasses1.2.png", "sunglasses1.3.png"];

function RightArrow1(){
    currentImage++;
    if(currentImage > 2){
        currentImage = 0;
    }
    document.getElementById("image_sunglasses_1").src = images1[currentImage];
}

function LeftArrow1(){
    currentImage--;
    if(currentImage < 0){
        currentImage = 2;
    }
    document.getElementById("image_sunglasses_1").src = images1[currentImage];
}

//second offer


let image_sunglasses_2 = document.getElementById('image_sunglasses_2');

let right_arrow2 = document.getElementById('right_arrow2');

let left_arrow2 = document.getElementById('left_arrow2');

let images2 = ['../Images/sunglasses2.1.png ', '../Images/sunglasses2.2.png', '../Images/sunglasses2.3.png'];
let currentImage2 = 0;

function hoverImage2() {
    right_arrow2.style.display = 'block';
    left_arrow2.style.display = 'block';
}

function unhoverImage2() {
    right_arrow2.style.display = 'none';
    left_arrow2.style.display = 'none';
}

function RightArrow2() {
    currentImage2++;
    if(currentImage2 > 2) {
        currentImage2 = 0;
    }
    document.getElementById('image_sunglasses_2').src = images2[currentImage2];
}   

function LeftArrow2() {
    currentImage2--;
    if(currentImage2 < 0) {
        currentImage2 = 2;
    }
    document.getElementById('image_sunglasses_2').src = images2[currentImage2];
}