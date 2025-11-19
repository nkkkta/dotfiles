"use strict"

let symbols = document.querySelector('.symbol');

for (symbol of symbols){
    symbol.addEventListener(()=> console.log(`Symbol`));
}
