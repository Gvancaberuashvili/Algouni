// // დაწერეთ პროგრამა, რათა შეამოწმოთ რიცხვი ლუწია თუ კენტი.
let num = 9;
if (num%2==0){
    console.log("the number is even")
} else{
    console.log("the number is odd")
}

// // დაწერეთ პროგრამა, რათა შეამოწმოთ რიცხვი დადებითია, უარყოფითი თუ ნული.
let num1 = 10
if (num1>0){
    console.log("the number is positive")
} else if (num1<0){
    console.log("the number is negative")
} else{
    console.log("the number is equal to 0")
}

// // დაწერეთ პროგრამა, რათა შეამოწმოთ იყოფა თუ არა რიცხვი სხვა რიცხვზე.
let num2 = 8
let num3 = 4
if (num2%num3==0){
    console.log("იყოფა")
} else{
    console.log("არ იყოფა")
}

// დაწერეთ პროგრამა, რათა შეამოწმოთ სტრიქონი ცარიელია თუ არა.
word = "gogra"
if (word === ""){
    console.log("it is empty")
} else{
    console.log("it is not empty")
}

// დაწერეთ პროგრამა, რათა შეამოწმოთ, შეიცავს თუ არა სტრიქონი კონკრეტულ სიტყვას.
if (word !== ""){
    console.log("it contains symbols")
} else{
    console.log("it is empty")
}

// დაწერეთ პროგრამა, რომ იპოვოთ მინიმალური ორი რიცხვიდან.
let nums1 = 15
let nums2 = 17
if (nums1>nums2){
    console.log("the second number is less")
} else{
    console.log("the first number is less")
}

// დაწერეთ პროგრამა, რომ იპოვოთ მაქსიმალური ორი რიცხვიდან.
if (nums1>nums2){
    console.log("the first number is greater")
} else{
    console.log("the second number is greater")
}

// დაწერეთ პროგრამა, რომელიც მომხმარებელს შეეკითხება თავის ასაკს და დაადგენს არის თუ არა 18 
// წლის ან უფრო მეტის. თუ არის, გამოპრინტეთ "Adult", თუარადა - "Minor"
let age = prompt("type in your age: ")
if (age>18){
  console.log("you are an adult")
} else{
  console.log("you are a minor")
}

// დაწერეთ პროგრამა, რომელიც შეეკითხება მომხმარებელს ქულას და გამოიტანს შესაბამის შეფასებას. 
// 91-100 -> A; 81-90 -> B, 71 -> 80: C, 61-70 -> D, 51-60 -> E, 0-50 -> ჩაიჭრა. გამოიყენეთ ორივე - if/else if/else და switch.
// version N1
let grade = prompt("type in your grade(0-100): ")
if (100>=grade>=91){
    console.log("A")
} else if(90>=grade>=81){
    console.log("B")
} else if(80>=grade>=71){
    console.log("C")
} else if(70>=grade>=61){
    console.log("D")
} else if(60>=grade>=51){
    console.log("E")
} else if(50>=grade>=0){
    console.log("F")
}
// version N2
switch (grade) {
    case 100>=grade>=91:
        console.log("A");
    case 90>=grade>=81:
        console.log("B");
    case 80>=grade>=71:
        console.log("C");
    case 70>=grade>=61:
        console.log("D");
    case 60>=grade>=51:
        console.log("E");
    case 50>=grade>=0:
        console.log("F");
}

// დაწერეთ პროგრამა, რომელიც მიიღებს შეფასებას (A, B, C, D ან F) ინფუთის სახით და დაბეჭდავს შესაბამის შეტყობინებას switch/case-ის გამოყენებით. მაგალითად, თუ ინფუთი არის "A", უნდა დაბეჭდოს "შესანიშნავი!"
let grade1 = prompt("type in your grade(A-F): ")
switch (grade1) {
    case "A":
        console.log("excellent!");
    case "B":
        console.log("good.");
    case "C":
        console.log("average.");
    case "D":
        console.log("passed.");
    case "E":
        console.log("meh");
    case "F":
        console.log("failed.")
}

// დაწერეთ პროგრამა, რომელიც ინფუთის სახით მიიღებს თვის რიცხვს (1 იანვრისთვის, 2 თებერვლისთვის და ა.შ.) და ამობეჭდავს დღეების რაოდენობას ამ თვეში switch/case-ის გამოყენებით.
let month = prompt("enter a number for each month(1-12): ")
switch (month) {
    case 1:
        console.log("31 days");
    case 2:
        console.log("28 (29 in a leap year)");
    case 3:
        console.log("31 days");
    case 4:
        console.log("30 days");
    case 5:
        console.log("31 days")
    case 6:
        console.log("30 days");
    case 7:
        console.log("31 days");
    case 8:
        console.log("31 days");
    case 9:
        console.log("30 days");
    case 10:
        console.log("31 days");
    case 11:
        console.log("30 days");
    case 12:
        console.log("31 days");
}