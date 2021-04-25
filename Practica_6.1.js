var myCar = new Object();

console.log(myCar);

myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

//console.log(myCar);


// Otra form de declar el objeto myCar

var MiCoche = {make : 'Ford', model: 'Mustang', year: 1969};
//console.log(myCar, MiCoche);

myCar.year = 1970;

//console.log(myCar);

//Tipos de propiedades en un objeto

var elObjeto = new Object(), 
str = 'miString', 
rand = Math.random(), 
obj = new Object(),
bol = true;

//console.log(elObjeto,str,rand,obj,bol);

elObjeto.type = 'Sintaxis de puntos';
elObjeto['fecha de creacion'] = 'usando variable de cadena';
elObjeto[str] = 'Usando variable de cadena';
elObjeto[rand] = 'Usando un numero aleatorio';
elObjeto[obj] = 'Inseption con objetos';
elObjeto[''] = 'Usando una propiedad vacia';
elObjeto[bol] = 'Usando una propiedad boleana';


//Iteracion con una funcion
function showProp(obj, objName){
    var result = '';
    for (var i in obj){
        if(obj.hasOwnProperty(i)){
            result += `${objName}.${i} = ${obj[i]}\n`;
        }
    }
    return result;
}

console.log(showProp(elObjeto, 'elObjeto'));