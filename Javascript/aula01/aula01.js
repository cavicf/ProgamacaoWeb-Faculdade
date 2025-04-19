console.log('Deu boa');

let x = 10;
let cidade = 'itajubá';

console.log(x, cidade);
console.log(typeof(x));
console.log(typeof(cidade));

x = 'café';

console.log(typeof(x));

const y = 10;
const z = [1,2,3,4]; //utilizar constantes para criar arrays e evitar erros de perca de referencia
console.log(z[0])
z[0] = 8;
console.log(z[0]);

let a = 5;
let b = 5;
let c = '5';

if((a === c)){ //três iguais compara os valores e tipos
    console.log('são iguais')
}
else{
    console.log('nem')
}
if(a === b){
    console.log('são iguais')
}