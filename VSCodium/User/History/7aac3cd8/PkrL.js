
const tabContainer = document.querySelector('.tabs');

tabContainer.addEventListener('click', (event) => {
    if(event.target.classList.contains('.tab')){
        alert("AAAA");
    }
})

function tabClicked(){
    alert(this.innerHTML);
}

document.getElementById('tab2').onclick = tabClicked;
