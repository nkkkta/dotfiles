
const tabs = document.querySelectorAll('.tabs__item');

tabs.forEach(activeTab => {
    activeTab.addEventListener('click', function() {
        activeTab.classList.remove('tabs__item--active')
    })
})

