const prompt = require('prompt-sync')();

function lower() {
    string = prompt("enter anything: ")
    return string.toLowerCase()
}
console.log(lower())