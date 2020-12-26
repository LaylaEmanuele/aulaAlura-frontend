import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{ //class
 
    static numeroDeContas = 0;  // attribute of class

    constructor(cliente, agencia){
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas +=1;
    }

    sacar(valor){ // sobreescrita
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
s
   
}