"use strict"

let symbols = document.querySelector('.symbol');

for (let symbol in symbols){
    symbol.addEventListener(()=> console.log(`Symbol`));
}
