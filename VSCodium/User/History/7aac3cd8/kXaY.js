
const tabContainer = document.querySelector('.tabs');

tabContainer.addEventListener('click', (event) => {
    if(event.target.classList.contains('.tab')){
        console.log('Hello');
    }
})
