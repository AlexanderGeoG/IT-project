let image_sunglasses_1 = document.getElementById('image_sunglasses_1');

let right_arrow = document.getElementById('right_arrow');

let left_arrow = document.getElementById('left_arrow');

function hoverImage1() {
    right_arrow.style.display = 'block';
    left_arrow.style.display = 'block';
}

function unhoverImage1() {
    right_arrow.style.display = 'none';
    left_arrow.style.display = 'none';
}

let currentImage = 0;
let images = ["sunglasses1.1.png", "sunglasses1.2.png", "sunglasses1.3.png"];

function RigthArrow(){
    currentImage++;
    if(currentImage > 2){
        currentImage = 0;
    }
    document.getElementById("image_sunglasses_1").src = images[currentImage];
}

function LeftArrow(){
    currentImage--;
    if(currentImage < 0){
        currentImage = 2;
    }
    document.getElementById("image_sunglasses_1").src = images[currentImage];
}