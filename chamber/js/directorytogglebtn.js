const cardButton = document.getElementById('card-button');
const listButton = document.getElementById('list-button');

function displayCards() {
    document.getElementById('cards').classList.remove('hidden');
    document.getElementById('list').classList.add('hidden');
    listButton.classList.remove('current');
    cardButton.classList.add('current');
}

function displayList() {
    document.getElementById('cards').classList.add('hidden');
    document.getElementById('list').classList.remove('hidden');
    listButton.classList.add('current');
    cardButton.classList.remove('current');
}

cardButton.onclick = displayCards;
listButton.onclick = displayList;