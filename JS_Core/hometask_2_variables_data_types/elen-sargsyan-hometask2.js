//Beginner Practice
const carName = 'Volvo';
const years = 50;
const x = 5;
const y = 10;
console.log(x + y);
const z = x + y;
console.log(z);
const firstName = "John", lastName = "Doe", age = 35;
const a = 10;
const b = 5;
console.log(a * b);


//The Fortune Teller
const numChildren = 3
const partnerName = "W"
const geogLoc = "Amsterdam"
const jobTitle = "freelancer";

console.log(`You will be a ${jobTitle} in ${geogLoc}, and married to ${partnerName} with ${numChildren} kids.`)


//Data type practice
const favoriteNum = 4;
console.log(typeof(favoriteNum)); //number

const stringNum = toString(favoriteNum);
console.log(typeof(stringNum));  //string

const backNum = Number(stringNum);
console.log(typeof(backNum));  //number

//Variables Practice
let someName = "Elen";
console.log(someName); //Elen

someName = 'Sargsyan';

let favoriteNumber = 4;
favoriteNumber = favoriteNumber/2;

console.log(favoriteNumber); //2

let michaelsFavorite = 13;
michaelsFavorite = 7;

console.log(michaelsFavorite - favoriteNumber); //5

//Type prediction
console.log(typeof(15)); //number
console.log(typeof(5.5)); //number
console.log(typeof(NaN)); //number
console.log(typeof("hello")); //string
console.log(typeof(true)); //boolean
console.log(typeof(1 != 2)); //boolean
console.log(typeof(2n)); //bigint


//Type conversions
console.log(Number(" 123 ")); //123
console.log(Number(true)); //1
console.log(Number(false)); //0
console.log(Boolean(1)); //true
console.log(Boolean(0)); //false
console.log(Boolean("")); //false
console.log(Boolean(" ")); //true
console.log(1/0); //infinity
console.log(1/'name'); //NaN