// Objeto Casa

function Casa(color,modelo,numero,direccion){
    this.color = color;
    this.modelo = modelo;
    this.numero = numero;
    this.direccion = direccion;
}

var casa1 = new Casa('Cafe','Terra','1','c. 1 x 2 y 4');
//console.log(casa1);

// Objeto Persona

function Persona(nomnbre,apellidoPaterno,apellidoMaterno,edad,genero,estadoCivil){
    this.nomnbre = nomnbre;
    this.apellidoPaterno = apellidoPaterno;
    this.apellidoMaterno = apellidoMaterno;
    this.edad = edad;
    this.genero = genero;
    this.estadoCivil = estadoCivil;
}

var persona1 = new Persona('Angel','Sky','Sky','30','M','Soltero');
//console.log(persona1);

//Crear un objeto a partir de dos objetos

function registros(numeroresgistro,casa,comprador){
    this.numeroresgistro = numeroresgistro;
    this.casa = casa;
    this.comprador = comprador;
}

var registro1 = new registros('1',casa1,persona1);
console.log(registro1);