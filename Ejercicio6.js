//Arreglo de numeros, dividirlo de 3 en 3 e imprimir el menor de cada arreglo

//var inputNumeros = [2,4,1,5,2,3,8,9];
var inputNumeros = [7,6,5,3,4,5,3,2,4]
var arrayFinal= [];

const divideArray = (list,numElements) =>{ 
    var arrayFinal= [];
    while(list[0]){
        arrayFinal.push(list.splice(0,numElements));
    }
    return arrayFinal
}
const minNumber = (arrayThree) =>{ 
    var x='';
    arrayThree.map(element => x += (Math.min.apply(null,element)).toString())
    return x;
}

//console.log(divideArray(inputNumeros,3))
console.log('Minimum numbers from arrays - Output : ' + minNumber(divideArray(inputNumeros,3)))
