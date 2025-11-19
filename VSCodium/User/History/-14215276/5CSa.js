"use strict"

let symbols = document.querySelectorAll('.symbol');

for (let symbol in symbols){
    symbol.addEventListener('click', ()=> console.log("Listen..."));
}

function clickHandler(symbol){
    console.log(symbol.text);
}
