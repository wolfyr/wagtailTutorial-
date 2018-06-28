

let cards = document.querySelectorAll('.card');
let index = 0
cards.forEach(card => {
    
    card.setAttribute('id', index);
    index = index + 1;
});