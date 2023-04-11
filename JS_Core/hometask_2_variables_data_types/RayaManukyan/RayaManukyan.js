//////////////////////////////////////////////////////////////////////
//Beginner practice
//////////////////////////////////////////////////////////////////////

//1.	Create a variable called carName, assign the value Volvo to it.
const carName = 'Volvo';
//2.	Create a variable called years, assign the value 50 to it.
let years = 50;
//3.	Log the sum of 5 + 10, using two variables: x and y.
let x = 5;
let y = 10;
console.log(x + y);
//4.	Create a variable called z, assign x + y to it, and Log the result in console.
let z = x + y;
console.log(z);
//5.	On one single line, declare three variables with the following names and values: firstName = "John", lastName = "Doe", age = 35
const firstName = "John", lastName = "Doe", age = 35;
//6.	Create 2 variables, assign to them values 10 and 5, log to console the value of their multiplication.
console.log(x * y);

//////////////////////////////////////////////////////////////////////
//The Fortune Teller
//////////////////////////////////////////////////////////////////////

let numberOfChildren = 2;
let partnerName = "Greg";
let geographicLocation = "Yerevan";
let jobTitle = "QA Engineer";
console.log(`You will be a + ${jobTitle} + in + ${geographicLocation} + , and married to + ${partnerName} +  with + ${numberOfChildren} +  kids.`);

//////////////////////////////////////////////////////////////////////
//Data type practice
//////////////////////////////////////////////////////////////////////

//1.	Set a variable equal to your favorite number and check the data type.
let favoriteNumber = 5;
console.log(typeof favoriteNumber);
//2.	Then, create a new variable converting the previous variable to a string. Check the data type again.
let favoriteNumberString = String(favoriteNumber);
console.log(typeof favoriteNumberString);
//3.	Create a third variable, converting this string variable back to a number. Check the data type one more time.
let favoriteNumberAgain=Number(favoriteNumberString);
console.log(typeof favoriteNumberAgain);

//////////////////////////////////////////////////////////////////////
//Variables Practice
//////////////////////////////////////////////////////////////////////

//1.	Set a variable called someName equal to your name. Put your name in quotation marks.
let someName = 'Raya';
//2.	Display the value of someName in the console.
console.log(someName);
//3.	Change the value of someName to your surname.
someName = 'Manukyan';
//4.	Set a variable called favoriteNumber equal to your favorite number.
favoriteNumber = 10;
//5.	Calculate what your favorite number divided by 2 is.
let dividedByTwo = favoriteNumber / 2;
console.log(dividedByTwo);
//6.	Set another variable called michaelsFavorite equal to 13.
let michaelsFavorite = 13;
//7.	Change the value of michaelsFavorite to 7.
michaelsFavorite = 7;
//8.	Subtract your favorite number after devision from the latest michaelsFavorite number.
let result = michaelsFavorite - dividedByTwo;
console.log(result);

//////////////////////////////////////////////////////////////////////
//Type prediction
//////////////////////////////////////////////////////////////////////

console.log(typeof(15) + ' is a number');
console.log(typeof(5.5) + ' is a number');
console.log(typeof(NaN) + ' is a number');
console.log(typeof("hello") + ' is a string');
console.log(typeof(true) + ' is a boolean');
console.log(typeof(1!=2) + ' is a boolean');
console.log(typeof(2n) + ' is a bigint');

//////////////////////////////////////////////////////////////////////
//Type conversions
//////////////////////////////////////////////////////////////////////
console.log(Number(" 123 "));
console.log(Number(true));
console.log(Number(false));
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(" "));
console.log(1/0);
console.log(1/'name');