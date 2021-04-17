//Ciclos

var i=0;

for(i;i<5;i++){
    console.log("Esto es su valor: ", i)
}

// ejercicio FOR

var arreglo = ['a','b']

// While

var chelas = 99;
/*
while (chelas > 0){
    console.log("aun hay " + chelas + " en el refri, sigue la fiesta}")
    chelas-=1
}
*/
// Switch  - Case
var rank = "Commander";
switch(rank)
{
    case "Private":
        console.log("You are not authorized.");
        break;
    case "Sergeant":
        console.log("You are not authorized.");
        break;
    case "Commander":
        console.log("Hello commander! what can I do for you today?");
        break;
    case "Captain":
        console.log("Hello captain! I will do anything you wish.");
        break;
    default:
        console.log("I don't know what your rank is.");
        break;
}
