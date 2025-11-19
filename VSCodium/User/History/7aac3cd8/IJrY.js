
const tabs = document.querySelectorAll('.tabs__item');

tabs.forEach(activeTab => {
    activeTab.addEventListener('click', function() {
        tab.classList.toggle("tabs__item--active")
    })
})

