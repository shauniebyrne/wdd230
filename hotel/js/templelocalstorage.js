const likeBtn = document.querySelector('.local-storage');
let likedStorage = window.localStorage.getItem('liked-temple');

likeBtn.onclick = localStorage.setItem('liked-temple', 'This temple is liked');
