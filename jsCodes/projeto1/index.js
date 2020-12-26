import {Cliente} from './Cliente.js';
import {ContaCorrente} from './contas/ContaCorrente.js';
import {ContaPoupanca} from './contas/ContaPoupanca.js';
import {Diretor} from './funcionarios/Diretor.js'; 
import {Gerente} from './funcionarios/Gerente.js'; 
import {SistemaAutenticacao} from './SistemaAutenticacao.js'
// const cliente1 = new Cliente("Ricador", 11122233309); // instance
// const contaCorrenteRicador = new ContaCorrente(0, cliente1, 1001);
 
// contaCorrenteRicador.depositar(100);
// const valorSacado = contaCorrenteRicador.sacar(50);

// const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

// console.log(contaCorrenteRicador);
// console.log(contaPoupanca);

const diretor = new Diretor("Rodrigo", 10000, 1232456);
const gerente = new Gerente("Ricardo", 1000, 1235454);
const cliente = new Cliente("Ricardo", 100, 123);

diretor.cadastrarSenha(12345);
console.log(SistemaAutenticacao.login(cliente, 123));




