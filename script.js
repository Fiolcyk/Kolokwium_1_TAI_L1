let button = document.querySelector('.button');
let box = document.querySelector('.box');

button.addEventListener('click',changeColor);

function changeColor(){
    box.style.backgroundColor = "red";
}