const div = document.querySelector('.directory-buttons');
const cardsButton = document.getElementById('card-button');
const listButton = document.getElementById('list-button');
const cards = document.getElementById('cards');
const list = document.getElementById('list');

cardsButton.addEventListener('click', () => {
    list.classList.toggle('hidden');
}, false);

listButton.addEventListener('click', () => {
    cards.classList.toggle('hidden');
}, false);