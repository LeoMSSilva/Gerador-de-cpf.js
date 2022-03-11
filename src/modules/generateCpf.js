import ValidateCpf from './validateCpf';

export default class GenerateCpf {
	random(min = 100000000, max = 999999999) {
		return Math.floor(Math.random() * (max - min) + min);
	}

	formatCpf(cpf) {
		return cpf
			.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
			.slice(0, 14);
	}

	generateNewCpf() {
		const partialCpf = this.random();
		const digitOne = ValidateCpf.createDigit(partialCpf);
		const digitTwo = ValidateCpf.createDigit(partialCpf + digitOne);
		const newCpf = partialCpf + digitOne + digitTwo;
		return this.formatCpf(newCpf);
	}
}
