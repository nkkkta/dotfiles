"use strict"

let symbols = document.querySelectorAll('.symbol');

for (let symbol in symbols){
    addEventListener('click', symbol);
}
