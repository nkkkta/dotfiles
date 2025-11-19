
const tabs = document.querySelectorAll('.tabs__item');

tabs.forEach(activeTab => {
    activeTab.addEventListener('click', () => {
        tabs.forEach(tab => {
            tab.classList.remove('tabs__item-active')
        })

        activeTab.classList.add('tabs__item--active')

    })
})

