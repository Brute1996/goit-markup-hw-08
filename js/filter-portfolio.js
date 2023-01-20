const filterButtons = document.querySelector('.filter-btn-list')
const portfolioCards = document.querySelectorAll('.portf-item')
filterButtons.addEventListener('click', (e) => {
    if (e.target.nodeName !== 'BUTTON') {
        return;
    };

    portfolioCards.forEach(card =>{
        if (card.dataset.content !== e.target.dataset.filter && e.target.dataset.filter !== 'all'){
            card.classList.add('disable-element');
        } else card.classList.remove('disable-element');
        
    });
});