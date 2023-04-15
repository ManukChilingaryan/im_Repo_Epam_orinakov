                                   //1. WHAT IS WRONG IN THE FUNCTION

// const foo = function (a, b) {
//     console.log(a + b);
// }
// foo(1, 3);
// //or
// const foo = function (a, b) {
//     return a + b;
// }
// console.log(foo(1, 3));

                                     //2. MODIFY FUNCTIONS

                               //declaration

// function plusNumbers(a,b){
//     let result = a + b
//     return result
// }

                              //expression

// const plusNumbers = function(a,b){
//     let result = a + b
//     return result
// }
                              // arrow

// const plusNumbers = (a,b) => a + b
//
// console.log(plusNumbers(7,11))

                                        //3. WRITE A FUNCTION TO REVERSE A NUMBER

// function reverseNum(a) {
//     let reverseNum = ""
//     for (let i = String(a).length - 1; i >= 0; i--) {
//         reverseNum += String(a)[i]
//     }
//     return reverseNum
// }

                                          //3.2

// const num = "1"
// let numbers = num.split("")
// numbers.reverse()
// let reverseNum = "";
// for(let i = 0;i < numbers.length;i++){
//     reverseNum += numbers[i]
// }
// console.log(reverseNum)

                                          //5․ program to display the colors

// function Ordinal(n) {
//     let o = ["th", "st", "nd", "rd"]
//     return n + (o[n] || o[0])
// }

// function displayColor(color) {
//     let message = " "
//     for (let n = 0; n < color.length; n++) {
//         let message = (Ordinal(n + 1) + " choice is " + color[n] + ".");
//         console.log(message)
//     }
// }
//
// let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"]
// displayColor(color)

                                           //6. STRING IS A PALINDROME

// function isPalindrome(word) {
//     let isPalindrome = false;
//     for (let i = 0; i < word.length / 2; i++) {
//         if (word[i] === word[word.length - 1 - i])
//             isPalindrome = true
//         else {
//             isPalindrome = false
//             break
//         }
//     }
//     return isPalindrome
// }

                                           //7. COUNT OF A LETTER IN A STRING

// function countLetter(text, letter) {
//     let count = 0
//     for (let i = 0; i < text.length; i++) {
//         if (text[i] == letter)
//             count++
//     }
//     return count
// }

                                           //8. SORT

// function sorting(word) {
//     let sorted = ""
//     let array = word.split("")
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++)
//             if (array[i] > array[j]) {
//                 let temp = array[i]
//                 array[i] = array[j]
//                 array[j] = temp
//             }
//         sorted += array[i]
//
//     }
//     return sorted
// }

                                          //9. PYRAMID

// function drawPyramid(n) {
//     let string = ""
//
//     for (let i = 1; i <= n; i++) {
//
//         for (let j = 1; j <= n - i; j++) {
//             string += " "
//         }
//         for (let k = 0; k < 2 * i - 1; k++) {
//             string += "*"
//         }
//         string += "\n"
//     }
//     return string
// }

                                         //10. CALLBACK FUNCTION - LEVEL 1

// function addNumbers(num1, num2, andcallback) {
//     let result = num1 + num2
//     return andcallback(result)
// }
//
// function addcallback(result) {
//     console.log(result)
// }

                                        //11. CALLBACK FUNCTION - LEVEL 2

// function applyCallbackToArray(arr,callback){
//     let result = []
//     for(let i = 0;i<arr.length;i++){
//         result.push(callback(arr[i]))
//     }
//     return result
// }
// function multiple(num){
//     let result = num * 2
//     return result
// }

                                        //12. RECURSION FUNCTION

// function factorial(n) {
//     // if(n < 0)
//     //     return "Please positive number"
//     if (n === 0)
//         return 1
//     return n * factorial(n - 1)
// }


