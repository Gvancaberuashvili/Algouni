const prompt = require('prompt-sync')();


function speed (user_prompt) {
    const user_prompt2 = user_prompt.split(' ')
    // const user_prompt3 = '...'.join(user_prompt2)
    const user_prompt3 = user_prompt2.join('...')
    return user_prompt3
}
console.log(speed(prompt()))

