
const tabs = document.querySelectorAll('.tabs__item');

tabs.forEach(activeTab => {
    activeTab.addEventListener('click', function() {
        tabs.forEach(tab => {
            tab.classList.remove('tabs__item-active')
        })
    })
})

