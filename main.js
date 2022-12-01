const prompt = require('readline-sync');
const {matrixProduct, sumOfMatrices, sumOfArray, sumOfEachRow, trim, countWords} = require('./utils.js');

let a = [
     [12, 34, 45],
     [3, 13, 23],
     [4, 42, 55]
];
let b = [
     [11, 43, 5],
     [65, 92, 0],
     [1, 2, 3]
]

let sentence = prompt.question("Write a sentence ");
let word = prompt.question("Write a word ");


console.log(sumOfEachRow(a));
console.log(sumOfMatrices(a,b));
console.log(matrixProduct(a,b));
console.log(countWords(sentence));
console.log(trim(word));

