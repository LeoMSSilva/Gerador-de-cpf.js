import GenerateCpf from './modules/generateCpf';
import './assets/css/style.css';

const container = document.querySelector('.container');
container.addEventListener('submit', (e) => {
	e.preventDefault();
	const generate = new GenerateCpf();
	const result = document.querySelector('#result');
	result.innerHTML = generate.generateNewCpf();
});
