

let symbols = document.querySelectorAll("div");

for (let symbol in symbols){
    symbol.addEventListener("click", function(){clickHandler(symbol)}, false);
}

function clickHandler(symbol){
    console.log(symbol.text);
}


