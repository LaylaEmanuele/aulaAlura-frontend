console.log(`Trabalhando com listas`);

const salvador = `Salvador`;
const sp = `Sao Paulo`;
const rj = `Rio de Janeiro`;

const listaDeDestinos = new Array(`Salvador`, `Sao Paulo`, `Rio de Janeiro`);
listaDeDestinos.push(`Curitiba`); // add mais itens na lista
console.log(listaDeDestinos);
listaDeDestinos.splice(1,1); // remover um elemento primeiro a posicao depois a qtd a ser removida 
console.log(listaDeDestinos);
console.log(listaDeDestinos[1]); // imprimir uma posicao especifica



