const btnMenu = document.getElementById('btn-menu');
const nav = document.querySelector('nav');

btnMenu.addEventListener('click', () => {
    nav.classList.toggle('ativo');
});

const btnTopo = document.getElementById('btn-topo');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        btnTopo.style.display = 'block';
    } else {
        btnTopo.style.display = 'none';
    }
});

btnTopo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

