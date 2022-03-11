export default class ValidateCpf {
	construtor(cpfReceived) {
		Object.defineProperty(this, 'cleanedCpf', {
			writable: false,
			configurable: false,
			enumerable: true,
			value: cpfReceived.replace(/\D+/g, ''),
		});
	}

	isSequence(cleanedCpf) {
		return cleanedCpf === cleanedCpf[0].repeat(cleanedCpf.length);
	}

	static createDigit(partialCpf) {
		const cpfString = partialCpf.toString();
		const cpfArray = Array.from(cpfString);
		let length = cpfArray.length + 1;
		let digit = cpfArray.reduce((a, v) => {
			a += Number(v) * length;
			length--;
			return a;
		}, 0);
		digit = 11 - (digit % 11);
		return digit > 9 ? '0' : String(digit);
	}

	generateNewCpf() {
		const partialCpf = this.cleanedCpf.slice(0, -2);
		const digitOne = ValidateCpf.createDigit(partialCpf);
		const digitTwo = ValidateCpf.createDigit(partialCpf + digitOne);
		this.newCpf = partialCpf + digitOne + digitTwo;
	}

	validate() {
		if (
			typeof this.cleanedCpf === 'undefined' ||
			this.cleanedCpf.length !== 11 ||
			this.isSequence(this.cleanedCpf)
		) {
			return false;
		}
		this.generateNewCpf();
		return this.newCpf === this.cleanedCpf;
	}
}
