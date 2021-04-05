import ValidaCpf from "./ValidaCpf";

export default class GeraCpf{
    rand(min = 100000000, max = 999999999){
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    formataCpf(cpf){
        cpf+='00000000000';
        return (
            cpf.slice(0,3) + '.' +
            cpf.slice(3,6) + '.' +
            cpf.slice(6,9) + '-' +
            cpf.slice(9,11)
            );
    }

    geraNovoCpf(){
        const cpfParcial  = this.rand();
        const digito1 = ValidaCpf.criaDigito(cpfParcial);
        const digito2 = ValidaCpf.criaDigito(cpfParcial + digito1);
        const novoCpf = cpfParcial + digito1 + digito2;
        console.log(novoCpf);
        return this.formataCpf(novoCpf);
    }
}