//Objetos

const Manager = {
    name: 'Guillermo',
    company: 'Telefonica',
    edad:32,
    job: 'Software Engineer'
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

console.log('Manager', Manager)
console.log('Manager', Manager.sayHello)
console.log('Manager', Manager.myAge)


console.log('Interno', Interno)
console.log('Interno', Interno.sayHello)
console.log('Interno', Interno.myAge)