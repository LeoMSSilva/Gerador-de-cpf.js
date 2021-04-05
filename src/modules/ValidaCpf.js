export default class ValidaCpf{
    construtor(cpfRecebido){
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            configurable: false,
            enumerable: true,
            value: cpfRecebido.replace(/\D+/g, '')
        });
    }
    
    isSequence(){
        return this.cpfLimpo === this.cpfLimpo[0].repeat(11);
    }
    
    geraNovoCpf(){
        const cpfParcial = this.cpfLimpo.slice(0,-2);
        const digito1 = ValidaCpf.criaDigito(cpfParcial);
        const digito2 = ValidaCpf.criaDigito(cpfParcial + digito1);
        this.novoCpf = cpfParcial+digito1+digito2;
    }

    static criaDigito(cpfParcial){
        const cpfArray = Array.from(cpfParcial);
        let tamanho = cpfArray.length + 1;
        let digito = cpfArray.reduce((a, v) => {
            a += Number(v)*tamanho;
            tamanho--;
            return a;
        }, 0);
        digito = 11 - digito % 11;
        return digito>9?'0':String(digito);
    }
    
    valida(){
        if (typeof this.cpfLimpo === 'undefined' || this.cpfLimpo.length !== 11 || this.isSequence()) return false;
        this.geraNovoCpf();
        return this.novoCpf === this.cpfLimpo;
    }
}