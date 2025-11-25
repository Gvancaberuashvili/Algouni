const prompt = require('prompt-sync')();

function convert(str1){
    str1 = str1.split(' ')
    for(let i = 0; i < str1.length; i++){
        if (str1[i] === ':)'){
            str1[i] = '😊'
        } else if (str1[i] === ':('){
            str1[i] = '😒'
        }
    }
    str1 = str1.join(" ")
    return str1
}

console.log(convert(prompt("gtxovt emojs da sityvas shoris daweret space ise ver vaketeb: ")))