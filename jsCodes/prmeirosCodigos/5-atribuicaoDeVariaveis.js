console.log("Trabalhando com atribuição de variáveis");

const nome = "Layla"; // declaraçao e atribuiçao tem que ser feito em uma linha só no caso do const
const sobrenome = "Emanuele";

console.log(nome + " "+ sobrenome);
console.log(nome , sobrenome); // virgula dá um espaço

console.log(`Meu nome é ${nome} ${sobrenome}`);

nome = nome + " " + sobrenome; // sobreescrita nao pode ser feita em  constante, const nao pode mudar SOLUÇÃO USAR LET
console.log(nome);


