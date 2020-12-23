console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(`Salvador`, `Sao Paulo`, `Rio de Janeiro`);

const idadeComprador = 19;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Curitiba";

const podeComprar = (idadeComprador >= 18 || estaAcompanhada) == true;

let contador = 0;
let destinoExiste = false;

while(contador < 3){
    if((listaDeDestinos[contador] == destino)){
        destinoExiste = true;
        break;
    }
    contador++;
}
console.log("Destino existe:", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa Viagem");
}else{
    console.log("Desculpe, teve um erro");
}

for(let cont = 0; cont<3; cont++){
    if((listaDeDestinos[contador] == destino)){
        destinoExiste = true;
    }
}

