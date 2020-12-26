// class abstract
export class Conta{
    constructor(saldoInicial, cliente, agencia){
        if(this.conta == Conta){
            throw new Error("Voce nao deveria instanciar um objeto do tipo conta diretamente, pois ela é uma classe abstrata");
        }
        this._saldoInicial = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    
    // #saldo; forma de private porem ainda é uma proposta
    // _saldo; convenção da comunidade que é privado 


     // getters and setters
     set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this.cliente = novoValor;
        }
     }
 
     get cliente(){
         return this._cliente;
     }

    sacar(valor){ // method abstract
        throw new Error("O metodo sacar é abstrato");
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }

    depositar(valor){
        if(valor <= 0) return; // early return
        
        this._saldo += valor;
    }

    transferir(valor, conta){
        conta.cidade = "Sao paulo"; // add attributes dinamicamente
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}