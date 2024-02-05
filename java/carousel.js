"use strict";
let img = document.querySelector('#image1');


function carousel() {
    let imgSrc=img.getAttribute('src');
    console.log(imgSrc);
    if(imgSrc=="image/70_9782017237389_1_75.jpg"){
        img.setAttribute('src',"image/pot.jpg");
    }
    else if(imgSrc=="image/pot.jpg"){
        img.setAttribute('src',"image/piscine.jpg");
    }
    if(imgSrc=="image/piscine.jpg"){
        img.setAttribute('src',"image/poisson.webp");
    }
    if(imgSrc=="image/poisson.webp"){
        img.setAttribute('src',"image/70_9782017237389_1_75.jpg");
    }
}




img.addEventListener('click',carousel)