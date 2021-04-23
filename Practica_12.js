//Ejercicios entrevista


function threecompany(cadena){
    var n = cadena.length;
    var output= '';

    for(var i=0; i<n; i++){
        var letra = cadena.charAt(i);
        output = output + letra + letra + letra
    }

    return output;
};

console.log(threecompany('ty'))
console.log(threecompany('5567'))
console.log(threecompany('casa'))

//Contar el numero de vocales
//input: yurishi  output: 3

//arreglo de numeros,dividirlos de 3 en 3 e imprimir el numero menor
//input:[765345324] output: 532
//paso 1: [765 345 324]  output: 532

//Palindromo
