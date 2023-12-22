
//FUNCIONES NORMALES (TIENEN HOISTING)
//ES DECIR AUNQUE HAGA LA LLAMADA ANTES DE LA DECLARACIÓN DE LA FUNCIÓN EL CÓDIGO FUNCIONA
console.log(`El sludo es ${saludo()}`);
function saludo(){
    return 'Hola mundo';
}

function suma(a,b){
    console.log(a+b);
}
suma(2,5);

//FUNCIONES ANÓNIMAS (NO TIENEN HOISTING)
//PRIMERO HAY QUE DECLARAR LA FUNCIÓN Y LUEGO LLAMARLA
//HAY QUE DECLARARLAS EN VARIABLES
let resta = function (a,b){
    return a-b
}
console.log(resta(10,5));

//FUNCIONES FLECHA (ANÓNIMAS)´(EL LAMBDA DE JAVASCRIPT)
// let = (parametros)=> {funcion}

let suma2 = (a,b) => {return a+b};
console.log(suma2(10,2));

//si solo hay un argumento se puede simplificar quitando () {} y return
let saludo2 = nombre => 'Saludos ' + nombre;
console.log(saludo2('Gabriel'));
