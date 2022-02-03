const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('.list');

button.addEventListener('click', function() {
    let docInput = input.value;
    input.value = '';
    const enteredList = document.createElement('li');
    const deleteButton = document.createElement('button');

    enteredList.textContent = docInput;
    deleteButton.textContent = "❌";
        
    enteredList.appendChild(deleteButton);

    list.appendChild(enteredList);

    deleteButton.addEventListener('click', function() {
        list.removeChild(enteredList);
    });

    input.focus();

})