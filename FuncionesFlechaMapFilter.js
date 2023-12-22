//utilizar funciones de flecha para filtrar
let numerosAleatorios = new Array(20);


for(let i =0;i<numerosAleatorios.length;i++){
    numerosAleatorios[i] = Math.round(Math.random() *100 );
}

console.log(numerosAleatorios);

let numerosPares = numerosAleatorios.filter(item => item %2 == 0)
console.log(numerosPares);

let numerosImpares =  numerosAleatorios.filter(item => item%2 !==0)
console.log(numerosImpares);


let numeros = new Array(20)

for(let i =0;i<numerosAleatorios.length;i++){
    numeros[i] = Math.round(Math.random() *100 );
}

console.log(numeros);

let numeros2 = numeros.map(numero => numero*2)
console.log(numeros2);




//Filtrar por la primera letra
let array9 = ['manel', 'abel', 'marc', 'juan','aisha'];

function empiezaA(item) {
    return item.startsWith('a');
}

let newArray9 = array9.filter(empiezaA);

console.log(newArray9);


let array10 = ['manel', 'abel', 'marc', 'juan','aisha'];

let empiezaJ = array10.filter(item => item.startsWith('j') )
console.log(empiezaJ);

let NoempiezaJ = array10.filter(item => !item.startsWith('j') ) //asi me devuelve todos los que no
console.log(NoempiezaJ);