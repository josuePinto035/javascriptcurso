//Objetos

const Manager = {
    name: 'Guillermo',
    company: 'Telefonica',
    edad:32,
    job: 'Software Engineer'
}

const Manager2Level = {
    name: 'Guillermina',
    company: 'Telefonica',
    edad:30,
    job: 'Software Engineer'
}

Var Empleado_private = {
    name: 'Francisca',
    edad: 21,
    job:'Recepcionista'
}

const Interno = {
    name: 'Francisco',
    edad: 21,
    job:'Ir por el cafe'
}

function sayHello(){
    console.log('Hello...this is me: ', this.name)
}

function myAge(){
    console.log("what's  my age again", this.edad, 'years old')
}

Manager.sayHello = sayHello;
Interno.sayHello = sayHello;

Manager.myAge = myAge;
Interno.myAge = myAge;

Manager.salary = 30000;
Manager2Level.schedule = 'flexible';

console.log('Manager', Manager)
Manager.sayHello();
Manager.myAge();


console.log('Interno', Interno)
Interno.sayHello();
Interno.myAge();

