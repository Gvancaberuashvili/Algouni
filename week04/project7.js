const prompt = require('prompt-sync')();

function story() {
    let noun = prompt("enter a noun: ")
    let verb = prompt("enter a verb: ")
    let adjective = prompt("enter an adjective: ")
    let adverb = prompt("enter an adverb: ")
    return "do you " + verb + " with a " + adjective + " " + noun + " " +  adverb
}
console.log(story())