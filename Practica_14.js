// Funciones flecha

//Imprimir Hello
function helloW(nombre){
    return "Hola " + nombre + " ! "
}

console.log(helloW("Josue"))

const helloFlechaW = (name) => {
    return "Hola " + name + " ! "; 
}

console.log(helloFlechaW("Josue"));

//Funcion suma

var suma = function(x,y) {
 return x + y;
}

const suma2 = (x,y) => { return x+y;};

const suma3a = (x,y) => x + y;

console.log(suma(2,3));
console.log(suma2(2,3));
console.log(suma3a(2,3));

//Funcion Cuadrado

var cuadrado = function(x,y) {
    return x * x;
   }
   
   const cuadrado2a = (x,y) => { return x * x;};
   
   const cuadrado3a = (x,y) => x * x;

    console.log(cuadrado(2));
    console.log(cuadrado2a(4));
    console.log(cuadrado3a(5));

    //Funcion para manejar/imprimir los caracteres de una palabra (array palabras)

    var palabras = [
        'arbol', 'palabritas','Juan','Trabucles','Armandos','Cecilia','Gabriela'
    ];

    var contarLetras = palabras.map(s => s.length);
    console.log(contarLetras);

    //Tradicional
    var contarLetras_trad = palabras.map( function(s) {return s.length})

    //Funcion Multiplicar numeros de un array

    var arrayN = [1,2,3,4,5]
    /*
    function multiplicarNumeros(numero){
        return numero*2;
    }
    console.log(multiplicarNumeros(3));

    let losnumeros = numeros.map(multiplicarNumeros)
    */

    const multiplicarConFlecha = host => host * 2;
   // multiplicarFlecha=>1*2;
   //console.log(multiplicarFlecha);
    let multiplicarNumeros = arrayN.map(multiplicarConFlecha);
    console.log(multiplicarNumeros);