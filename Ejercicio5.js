//Contar el numero de vocales

//var test = "matest BEACH";
var test = "  TESTING this functionality haha  ";
var counterVowels=0;

const replaceConvertToLowerCase =  (StringToConvert) => Array.from(StringToConvert.replace(/ /gi,'').toLowerCase());
const countVowels = (counter) =>  {
    counter.map(s => {
        if (s.includes('a') || s.includes('e') || s.includes('i') || s.includes('o') || s.includes('u'))
        counterVowels++;
    })
    return counterVowels;
}

//console.log(replaceConvertToLowerCase(test));
console.log('\n' + 'Number of vowels in string is: ',  countVowels(replaceConvertToLowerCase(test)) + '\n');

