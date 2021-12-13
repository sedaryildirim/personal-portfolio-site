// Nav Menu
document.querySelector('.btn').onclick = function (e) {
    let menu = document.querySelector('.menu');
    let btn = document.querySelector('.btn');

    menu.classList.toggle('is-active');
    btn.classList.toggle('is-active');

    e.preventDefault();
}