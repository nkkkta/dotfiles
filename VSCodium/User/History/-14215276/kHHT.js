"use strict"

let symbols = document.querySelector('.symbol');

for (symbol in symbols){
    symbol.addEventListener(()=> console.log(`Symbol`));
}
