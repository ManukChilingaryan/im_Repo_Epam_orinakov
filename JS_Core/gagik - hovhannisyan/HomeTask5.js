//1. UPVOTES VS DOWNVOTES

// let upvotes = 30
// let downvotes = 10
// const count = {
//     upvotes: upvotes,
//     downvotes: downvotes,
// }
//
// function getVoteCount(count) {
//     return count.upvotes - count.downvotes
// }

// console.log(getVoteCount(count))

//2. CONVERTING OBJECTS TO ARRAYS

// let obj = {
//     shrimp: 15,
//     tots: 12
// }
// function convertToArray(obj) {
//     let arr = []
//     let arrArr = []
//
//     for (const objKey in obj) {
//
//         arr.push(objKey)
//         arr.push(obj[objKey])
//     }
//     for (let i = 0; i < arr.length; i += 2) {
//         let a = [arr[i], arr[i + 1]]
//         arrArr.push(a)
//     }
//
//     return arrArr
// }

//3. DRINK SORTING  GOOGLE

// const drinks = [
//     {name: "lemonade", price: 50}, {name: "lime", price: 10}, {name: "Fanta", price: 17}, {name: "Coca Cola", price: 15}
// ]
//
// function sortingDrinks(drinks) {
//     return drinks.sort((a, b) => a.price - b.price)
// }

//4. GET SUM OF PEOPLE'S BUDGET
// function getBudgets(arr) {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         sum += budgets[i].budget
//     }
//     return sum
// }
//
// let budgets = [{name: "John", age: 21, budget: 23000}, {name: "Steve", age: 32, budget: 40000}, {
//     name: "Martin",
//     age: 16,
//     budget: 2700
// }]

//5. CONVERT KEY, VALUES IN AN OBJECT TO ARRAY

// function objectToArray(obj){
//     arr1 = [], arr2 = [], toArr = []
//     for (const key in obj) {
//         arr1.push(key)
//         arr2.push(obj[key])
//     }
//     toArr.push(arr1)
//     toArr.push(arr2)
//     return toArr
// }

//6. INVERT KEYS AND VALUES

// function invert(obj) {
//     invert = {}
//     for (let key in obj) {
//         invert[obj[key]] = key
//     }
//     return invert
// }
// obj = {"zebra": "koala", "horse": "camel"}

//7. PERFUME

// function getPrice(name, capacity, arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].name === name) {
//             for (const Key in arr[i].prices) {
//                 if (Key == capacity) {
//                     return arr[i].prices[Key] + "$"
//                 } else return "Don't have"
//             }
//         }else  return "Don't have"
//     }
// }

//8. HOMEWORK CAR


// car = {
//     make : "Honda",
//     model : "Accord",
//     year : 2023,
//     color : "White",
//     mileage : 100,
//     drive : function drive(distance) {
//         this.mileage += distance
//     },
//     repaint : function repaint(newColor) {
//         this.color = newColor
//     }
// }
//  car.drive(10)
// console.log(car.mileage)
// car.repaint("Blue")
// console.log(car.color)

//9 CONSTRUCTOR FUNCTION

// function Person(name, age, occupation, hello) {
//     this.name = name,
//         this.age = age,
//         this.occupation = occupation
//     this.hello = function sayHello() {
//         console.log("Hello" + " " + this.name + " " + this.age)
//     }
// }
//
// const person1 = new Person("Alice", 30, "Engineer")
//
// console.log(person1.name + " " + person1.age + " " + person1.occupation)
// console.log(person1.hello())

//10 Getter and Setter Methods

// let person = {
//     name: "Armen",
//     age: 37,
//     gender: "male",
//
//     get personName() {
//         return this.name
//     },
//     get personAge() {
//         return this.age
//     },
//     get personGender() {
//         return this.gender
//     },
//     set personName(name) {
//         if (typeof name === "string")
//             this.name = name
//     },
//     set personAge(age) {
//         if (age > 0)
//             this.age = age
//     },
//     set personGender(gender) {
//         if (gender === "male" || gender === "female" || gender === "other")
//             this.gender = gender
//     }
// }

