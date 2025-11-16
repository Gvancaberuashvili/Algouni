const prompt = require('prompt-sync')();

//დაწერეთ პროგრამა რომელიც კონსოლში გამოპრინტავს რიცხვებს 0 დან 10-ის ჩათვლით. გამოიყენეთ while და for ციკლები.
// version N1
// let number = 0;
// while (number <= 10) {
//     console.log(number);
//     number++;
// }

// version 2 
// for (let number = 0; number<=10; number++) {
//     console.log(number);
// }

// დაწერეთ პროგრამა, რომელიც ბეჭდავს ლუწ რიცხვებს 1-დან 20-მდე for loop-ის გამოყენებით.
// for (let number = 0; number<=20; number+=2) {
//     console.log(number);
// }

// დაწერეთ პროგრამა, რომელიც სთხოვს მომხმარებელს შეიყვანოს რიცხვი და დაბეჭდოს "Hello!" იმდენჯერ რამდენსაც უდრის ეს შეყვანილი რიცხვი.
// let num = prompt("enter a number: ");
// let i = 0;
// while (i<=num) {
//     console.log("hello")
//     i++
// }

// დაწერეთ პროგრამა, რომელიც გამოთვლის რიცხვების ჯამს 1-დან 100-მდე for loop-ის გამოყენებით და დაბეჭდავს შედეგს.
// let result = 1
// for (let num = 0; num<100; num++){
//     result+=num
// }
// console.log(result)

// დაწერეთ პროგრამა, რომელიც გამოთვლის კენტი რიცხვების ჯამს 1-დან 100-მდე და დაბეჭდავს შედეგს.
// let result = 1
// for (let num = 0; num<100; num+=2){
//     result+=num
// }
// console.log(result)

// დაწერეთ პროგრამა, რომელიც სთხოვს მომხმარებელს გამოიცნოს საიდუმლო რიცხვი 1-დან 10-მდე. განაგრძეთ გამოცნობის მოთხოვნა, სანამ ისინი სწორად გამოიცნობენ, do while-ის გამოყენებით.
// let num;
// let number = 9
// do {
//     num = prompt("guess the number: ")
// } while (num!=number)
// console.log("good job!")

// გამოიყენეთ do...while ციკლი 10-დან 1-მდე დასათვლელად.
// let i=10;
// do {
//     console.log(i)
//     i = i - 1
// } while (i>=0)

// გამოიყენეთ for loop 1-დან 30-მდე 3-ის ჯერადების დასაბეჭდად.

// for (let num = 1; num<=30; num+=1){
//     if (num % 3 === 0)
//         console.log(num)
// }

// გამოიყენეთ for loop 4-ის გამრავლების ცხრილის დასაბეჭდად (4 × 1-დან 4 × 10-მდე).
// let result = 4
// for (let num = 1; num < 11; num++) {
//     result = 4 * num
//     if (result % 4 === 0)
//         console.log(result)
// }

// გამოიყენეთ while ლუპი, რათა დათვალოთ სიმბოლოების რაოდენობა სტრიქონში "AlgoUni" და დაბეჭდოთ შედეგი.
// let word = "AlgoUni"
// let counter = 1

// while (counter<=word.length){
//     console.log(counter)
//     counter++
// }

// გამოიყენეთ do...while ციკლი „დიახ“-ის დასაბეჭდად, თუ რიცხვი 5-ზე ნაკლებია და „არა“, თუ ის აღწევს ან აღემატება 5-ს. რიცხვების შუალედად აიღეთ -10 და 10.
// let num = -10
// do {
//     if (num<5) {
//         console.log("დიახ")
//     }
//     else {
//         console.log("არა")
//     }
//     num++
// } while (num<=10)

// გამოიყენეთ for loop 20-დან 10-მდე რიცხვების დასაბეჭდად

// for(let num = 20;num>=10;num--) {
//     console.log(num)
// }

// დიდი პირობა აქვს ;)
// let symbol = "#"
// for (let num=1;num<=6;num++){
//     console.log(symbol)
//     symbol+="#"
// }

// ამასაც :(
// let num = 1
// while (num<=100) {
//     if (num % 3 === 0 && num % 5 === 0){
//         console.log("fizzbuzz")
//     }
//     else if (num % 5 === 0){
//         console.log("buzz")
//     }
//     else if (num % 3 === 0){
//         console.log("fizz")
//     }
//     else {
//         console.log(num)
//     }
//     num++
// }
