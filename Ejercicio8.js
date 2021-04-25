//Contador vocales y consonantes

const vowelsAndConsonants = (str) =>{
    var numbVowels= str.match(/[aeiou]/gi).length;
    var numbConsonants= str.length - numbVowels;
    return [numbVowels,numbConsonants];
}

console.log('Vocales y Consonantes ' + vowelsAndConsonants('tyes'))
console.log('Vocales y Consonantes ' + vowelsAndConsonants('YUIRSHI'))
console.log('Vocales y Consonantes ' + vowelsAndConsonants('casa'))