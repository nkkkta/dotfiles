"use strict"

let symbols = document.querySelectorAll('.symbol');

for (let symbol in symbols){
    symbol.addEventListener("click", () => clickHandler(symbol), false)
}

function clickHandler(symbol){
    console.log(symbol.text);
}


