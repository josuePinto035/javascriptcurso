//Imprimir en consola

console.log('Aqui se imprime una linea')

// Imprimir multiple lineas

console.log("Linea uno \n linea dos")

// Como manejar un array en Javascript

var myarray = [];
myarray[3] = 67
myarray[5] = 'Lap'

console.log(myarray[0]);
console.log(myarray[1]);
console.log(myarray[2]);
console.log(myarray[3]);
console.log(myarray[4]);
console.log(myarray[5]);

// Agregar Elementos

myarray.push(4)
myarray.push('Fer')
myarray.push(false)
myarray[3] = 'Zapato'

console.log(myarray)

//Eliminar un elemento

myarray.pop()
console.log(myarray)

console.log(myarray.push(2))
console.log(myarray.pop())

console.log(myarray)

//Sacar un elemento al principio de arreglo

myarray.shift();
console.log(myarray.shift())

// Agregar un elemento al principio de arreglo

myarray.unshift('Clase')
console.log(myarray)

//Practica 1 - Ejercicio: resolver
//[4,6,8,5,3]
//[3,5,8,6,4]