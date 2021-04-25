//Palindromo

//var str = 'crying';
var str = 'anna';

var lengthStr = str.length;
var strToCompare ='';

const reverseStr = (str, lengthStr) => {
    for(i=lengthStr; i>0; i--) 
        strToCompare +=  str.charAt(i-1)
    return strToCompare;
};
const compareStr = (str1, str2) =>{
    if (str1==str2)
        console.log(str1 + ' Es palindromo')
    else
        console.log(str1 + ' No es palindromo')
}

compareStr(str,reverseStr(str,lengthStr))

