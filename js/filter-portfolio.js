const filterButtons = document.querySelector('.filter-btn-list')
const porfolioList = document.querySelector('.portf-list')
filterButtons.addEventListener('click', (e) => {
    if (e.target.nodeName !== 'BUTTON') {
        return;
    };
    console.dir(porfolioList.children.forEach(child => {
        console.log(child.dataset === e.target.dataset);
    }))
})