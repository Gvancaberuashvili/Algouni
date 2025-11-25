const prompt = require('prompt-sync')();

function escape() {
    let quote = prompt("tell me the quote: ")
    let author = prompt("who is the author?: ")
    return author + " once said:" + '"' + quote + '"'
}
console.log(escape())