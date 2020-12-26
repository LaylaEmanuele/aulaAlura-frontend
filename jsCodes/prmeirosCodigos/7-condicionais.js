console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(`Salvador`, `Sao Paulo`, `Rio de Janeiro`);
listaDeDestinos.push(`Curitiba`); // add mais itens na lista

const idadeComprador = 19;
const estaAcompanhada = true;
const temPassagemComprada = true;
// if(idadeComprador >= 18){
//     console.log(`Comprador maior de idade`);
//     listaDeDestinos.splice(1,1);
// }else if(estaAcompanhada){
//     console.log(`Comprador menor de idade acompanhada`);
//     listaDeDestinos.splice(1,1);
// }else{
//     console.log(`Comprador menor de idade`);
// }

if(idadeComprador >= 18 || estaAcompanhada){
    console.log(`Boa viagem`);
    listaDeDestinos.splice(1,1);
}else{
    console.log(`Comprador menor de idade`);
}

console.log('Embargue: \n');

if(idadeComprador >= 18 && temPassagemComprada){
    console.log('Boa viagem');
}else{
    console.log('Voce nao pode embarcar');
}


