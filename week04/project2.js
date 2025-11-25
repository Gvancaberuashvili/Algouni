const prompt = require('prompt-sync')();

function lenght (){
    let x = prompt("enter a word to calculate its lenght: ")
    return x.length
}
console.log(lenght())