"use strict";
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('show');
}
let valider=document.querySelector('#valider');

let bt=document.querySelector('button');

console.log(bt);

let interrupteur=0;
function backgroundC(){
    let body=document.querySelector('body');
    if(interrupteur==0){
        body.style.background='black';
        body.style.color='white';
        interrupteur=1;
    }else{
        body.style.background='white';
        body.style.color='black';
        interrupteur=0;}
}
bt.addEventListener("click",backgroundC)

function nom(e) {
    e.preventDefault();
    let name=document.getElementById("nom");
    let nom = name.value;
    console.log(nom);
    
}
valider.addEventListener("click", nom);

function prénom(e) {
    e.preventDefault();
    let prenom=document.getElementById("prenom");
    let prénom = prenom.value;
    console.log(prénom);
    
}
valider.addEventListener("click", prénom);

function mdp(e) {
    e.preventDefault();
    let motdepasse=document.getElementById("mdp");
    let mdp = motdepasse.value;
    console.log(mdp);
    
}
valider.addEventListener("click", mdp);

function mail(e) {
    e.preventDefault();
    let email=document.getElementById("mail");
    let mail = email.value;
    console.log(mail);
    
}
valider.addEventListener("click", mail);

function genre(e) {
    e.preventDefault();
    let genre=document.getElementsByName("genre");
    for (let i = 0; i < genre.length; i++) {
        if (genre[i].checked) {
            let genres = genre[i].value;
            console.log(genres);
            break;
            
        }
    }
}
valider.addEventListener("click", genre);

