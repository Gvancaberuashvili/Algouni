const prompt = require('prompt-sync')();

function hello () {
    let name = prompt("what is your name? ")
    if (!name) {
        return "hello უცნობო"
    }
    else {
        return "Hello," +  name + " nice to meet you"
    }
    
}
console.log(hello())