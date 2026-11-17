const btnMenu = document.getElementById('btn-menu');
const nav = document.querySelector('nav');

btnMenu.addEventListener('click', () => {
    nav.classList.toggle('ativo');
});
