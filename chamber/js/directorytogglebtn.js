const div = document.querySelector('.directory-buttons');
const cardsButton = document.getElementById('card-button');
const listButton = document.getElementById('list-button');
const cards = document.getElementById('cards');
const list = document.getElementById('list');

cardsButton.addEventListener('click', () => {
    list.classList.add('hidden');
    cards.classList.remove('hidden');
}, false);

listButton.addEventListener('click', () => {
    cards.classList.add('hidden');
    list.classList.remove('hidden');
}, false);

if (window.innerWidth >= 520 && window.innerWidth <= 1120) {
    cards.classList.add('hidden');
    list.classList.remove('hidden');
};