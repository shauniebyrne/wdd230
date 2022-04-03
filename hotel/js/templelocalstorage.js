const likeBtn = document.querySelector('.local-storage');
let likedStorage = window.localStorage.getItem('liked-temple');

function buttonChanged () {
    likeBtn.innerHTML = "&#9733;";
}

likeBtn.onclick = buttonChanged;

// Store clicked button in localstorage
localStorage.setItem('liked-temple', likeBtn);