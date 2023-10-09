const btn = document.querySelector('.menu-btn');
const list = document.querySelector('.menu-list');

btn.addEventListener('click', () => {
    list.classList.toggle('menu-open');
    if(btn.innerHTML === 'Menu') {
        btn.innerHTML = 'Close';
    } else {
        btn.innerHTML = 'Menu';
    }
});