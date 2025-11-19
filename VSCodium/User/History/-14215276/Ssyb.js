

let symbols = document.childNodes(document.body);

for (let symbol in symbols){
    symbol.addEventListener("click", function(){clickHandler(symbol)}, false);
}

function clickHandler(symbol){
    console.log(symbol.text);
}


