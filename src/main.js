import GeraCpf from './modules/GeraCpf';
import './assets/css/style.css';

document.addEventListener('submit', e => {
    e.preventDefault();
    const gera = new GeraCpf();
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = gera.geraNovoCpf();
});