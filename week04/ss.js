// დაწერეთ ფუქნცია, სახელად sayHello, რომელიც დაპრინტავს - "Hello, World".
// function sayHello() {
//     return "Hello, world"
// }
// console.log(sayHello())

// // დაწერეთ ფუნქცია, სახელად greet, რომელიც პარამეტრა მიიღებს სახელს და დაპრინტავს - "გამარჯობა, [სახელი]"
// function greet(name) {
//     return "გამარჯობა," + name
// }
// console.log(greet("nona"))

// // დაწერეთ ფუნქცია, სახელად sum, რომელიც არგუმენტებად მიიღებს ორ რიცხვს და დააბრუნებს მათ ჯამს. შედეგი გამოიტანეთ ტერმინალში.
// function sum(x,y) {
//     return x + y
// }
// console.log(sum(7,8))

// // დაწერეთ ფუნქცია, სახელად calculateArea, რომელიც არგუმენტად მიიღებს ოთხკუთხედის სიგრესა და სიგანეს და დააბრუნებს მის ფართობს. შედეგი გამოიტანეთ ტერმინალში.
// function calculateArea(l,w) {
//     return l * w
// }
// console.log(calculateArea(4,8))

// // დაწერეთ ფუნქცია, რომელიც მიიღებს ორ არგუმენტს და დააბრუნებს მათ შორის უდიდესს. გამოიყენეთ სამივე - Function Declaration, Function Expression, Arrow Function
// // function Declaration
// function bigger(x,y) {
//     if (x>y) {
//         return x
//     }
//     else {
//         return y
//     }
// }
// console.log(bigger(15,9))
// // function expression
// const more = function(x,y) {
//     if (x>y) {
//         return x
//     }
//     else {
//         return y
//     }
// }
// // arrow function
// const greater = (x,y) => {
//     if (x>y) {
//         return x
//     }
//     else {
//         return y
//     }
// }
// console.log(greater(14,18))
// //დაწერეთ ფუქნცია, რომელიც პარამეტრად მიიღებს იმ რაოდენობას, რამდენჯერად უნდა გამოკონსოლდეს "Hello, World".
// function amount(x) {
//     return "Hello world!".repeat(x)
// }
// console.log(amount(4))

//დაწერეთ ფუქნცია, სახელად celsiusToFahrenheit, რომელიც პარამეტრად მიიღებს ცელსიუსს და გადაიყვანს ფარენჰეიტში. ფორმულა - (Celsius * 9/5) + 32
// function celsiusToFarenheit(c) {
//     return (c * 9/5) + 32
// }
// console.log(celsiusToFarenheit(32))

// // დაწერეთ ფუნქცია სახელად sumDigits, რომელიც არგუმენტად იღებს რიცხვს და აბრუნებს მისი ციფრების ჯამს.(after სემინარი)
// function sumDigits(number) {
//     let sum = 0
//     while(number > 0) {
//         let digit = number % 10
//         sum += digit
    
//         number = Math.floor(number / 10)
//     }
//     return sum
// }
// console.log(sumDigits(134))

// დაწერეთ ფუნქცია, რომელიც მიიღებს ორ პარამეტრს და დააჯამებს ყველა რიცხვს გარკვეულ შუალედში. მაგალითად შეკრიბავს რიცხვებს 5-დან 100-მდე
// function sum(x,y) {
//     let sum = x
//     for(let i = 0;i<=y;i++) {
//         sum += i
//     }
//     return sum
// }
// console.log(sum(5,100))

// დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს სტრინგს და დააბრუნებს true-ს თუ სტრინგი არის პალინდრომი (თავიდან და ბოლოდან იგივენარიად იწერება) და false-ს თუ არაა პალინდრომი.(after სემინარი)
// function palindrome(word) {
//     let reversedWord = ""
//     for (let i = word.length - 1; i>=0 ; i--) {
//         reversedWord+=word[i]
//     }
//     return word===reversedWord
// }
// console.log(palindrome("level"))

