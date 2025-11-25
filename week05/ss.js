// დაწერეთ პროგრამა, რომ იპოვოთ მასივის ყველა რიცხვის ჯამი.
// let nums = [1,2,3,4,5]
// console.log(nums[0] + nums[1] + nums[2] + nums[3] + nums[4])

// დაწერეთ პროგრამა მასივში რიცხვების საშუალოს საპოვნელად.
// let nums = [1,2,3,4,5]
// console.log((nums[0] + nums[1] + nums[2] + nums[3] + nums[4]) / nums.length)

// დაწერეთ პროგრამა რიცხვების მასივის ზრდის მიხედვით დასალაგებლად.
// let nums = [2,7,4,3,8,1,5,0]
// console.log(nums.sort())

// დაწერეთ პროგრამა მასივში ყველაზე დიდი რიცხვის მოსაძებნად
// let nums = [2,7,4,3,8,1,5,0]
// nums = nums.sort()
// console.log(nums.pop())

// დაწერეთ პროგრამა მასივის ყველაზე პატარა ელემენტის მოსაძებნად.
// let nums = [2,7,4,3,8,1,5,0]
// nums = nums.sort()
// console.log(nums.shift())

// დაწერეთ პროგრამა, რათა შეამოწმოთ, შეიცავს თუ არა მასივი კონკრეტულ ელემენტს.
// let nums = [2,7,4,3,8,1,5,0]
// console.log(nums.includes(4))

// დაწერეთ პროგრამა მასივიდან ელემენტის ამოსაღებად.(ამ შემთხვევაში ამოაქვს შვიდი)
// let nums = [2,7,4,3,8,1,5,0]
// let sliced = nums.slice(1,2)
// console.log(sliced)


// დაწერეთ პროგრამა, რომ იპოვოთ მასივის ყველა ლუწი რიცხვის ჯამი.
// let nums = [2,7,4,3,8,1,5,0]
// let sum = 0

// for (let num of nums) {
//     if (num % 2 === 0) {
//         sum += num
//     }
// }

// console.log(sum)

// დაწერეთ პროგრამა მასივში სიდიდით მეორე რიცხვის მოსაძებნად.
// let nums = [2,7,4,3,8,1,5,0]
// nums = nums.sort()
// let num = nums.pop()
// num = nums.pop()
// console.log(num)

// დაწერეთ პროგრამა, რათა შეამოწმოთ არის თუ არა ორი მასივი ტოლი.
// let nums = [3,6,7,4,5]
// let nums1 = [4,6,2,1,2]
// console.log(nums===nums1)

// დაწერეთ პროგრამა რომ ორი სორტირებული მასივის შერთდეს და გახდეს ერთი მასივი რომელიც ასევე სორტირებული იქნებ
// let nums = [3,6,7,4,5]
// nums = nums.sort()
// let nums1 = [4,6,2,1,2]
// nums1 = nums1.sort()
// let nums3 = nums.concat(nums1)
// nums3 = nums3.sort()
// console.log(nums3)

// დაწერეთ პროგრამა სტრიქონების მასივის ანბანის მიხედვით დასალაგებლად.
// let random = ["asanidze","giorgadze","beruashvili"]
// random = random.sort()
// console.log(random)


// შექმენით ობიექტი სახელწოდებით car თვისებებით მარკის, მოდელისა და წლისთვის. დაბეჭდეთ ობიექტი კონსოლზე.
// let car =  {
//     brand: "Audi",
//     model: "A8",
//     year: 2015

// }
// console.log(car)

// დაამატეთ მეთოდი car ობიექტს სახელწოდებით start, რომელიც ბეჭდავს "The car is starting!" როდესაც გამოძახება. გამოიძახეთ დაწყების მეთოდი.
// let car =  {
//     brand: "Audi",
//     model: "A8",
//     year: 2015,
//     start: function() {
//         console.log("the car is starting")
//     }
// }
// car.start()

// შექმენით სხვა ობიექტი სახელად Person სახელის, ასაკისა და ქალაქის თვისებებით. დაბეჭდეთ სახელის თვისება წერტილის გამოყენებით.
// let person = {
//     name: "gvanca",
//     age: 16,
//     city: "tbilisi"
// }
// console.log(person.name)

// დაამატეთ ახალი თვისება სახელწოდებით job, Person ობიექტს და მიანიჭეთ მას მნიშვნელობა. დაბეჭდეთ განახლებული ობიექტი
// let person = {
//     name: "gvanca",
//     age: 16,
//     city: "tbilisi"
// }
// person.job = "profesionali memwvade"
// console.log(person)