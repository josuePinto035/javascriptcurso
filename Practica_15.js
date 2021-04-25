//Funciones de flecha

const array11 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];

const moduloCuatro = array11.filter(n => n % 4 ===0)

console.log(moduloCuatro);

//note_ tolowerCase() includes()  toUpperCase()

console.log(0== false)
console.log(0===false)

//Ejercicio buscar el numero menor y mayor de algunos nmeros

var x=21, y = -5, z = 3;
console.log(Math.min(x,y))
console.log(Math.min(x,y,z))


console.log(Math.max(x,y))
console.log(Math.max(x,y,z))

//Usando array

var numArray = [1,2,10,4,5]

function obtenerMax(numArray){
    //return Math.max(numArray)
    //return Math.max.apply(null,numArray)
}

//console.log(obtenerMax(numArray))

console.log(Math.max(...[4,6,2,8,6]))
console.log(Math.min(...[4,6,2,8,6]))

//ECMAScript6 new speard operator arrays

//funcion separar un array 

var index = numArray.length;
var primerarray = numArray.slice(0, index/2);
var segundoarray = numArray.slice(index/2,index);

console.log('Original: ', numArray)
console.log(primerarray)
console.log(segundoarray)

var alumnosDeHoy = ["Armando","Ceci","Gaby","Manuel","Jose","JC","Mau"]

function divideYVence(lista,howMany){
    var arrayFinal= [];
    input=lista.slice(0);

    while(input[0]){
        arrayFinal.push(input.splice(0,howMany));
    }
    return arrayFinal
}

console.log(divideYVence(alumnosDeHoy,3))

