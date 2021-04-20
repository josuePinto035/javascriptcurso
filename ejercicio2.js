var number = 7;
var cont = number;
var fact;
while(cont > 1){
    if (cont == number){
        fact = number * (cont - 1);
    }else{
        fact *=  (cont - 1);
    }
    cont--;
}

console.log("El factorial del numero " + number + " es: " + fact)