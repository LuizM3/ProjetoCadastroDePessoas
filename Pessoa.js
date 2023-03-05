export class Pessoa{
    #nome
    #idade
    #cpf
    constructor(_nome, _idade, _cpf){
        this.#nome = _nome;
        this.#idade = _idade;
        this.#cpf = _cpf;
    }
}