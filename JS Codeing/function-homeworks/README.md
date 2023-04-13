#JAVASCRIPT FUNCTIONS HOMEWORKS
## 1. WHAT IS WRONG IN THE FUNCTION
You should find a bug and fix it in the function that interferes works

```ruby
const foo = function (a, b) {
   console.log(a + b); 
}
console.log(foo(1,3));
```
* **```first output is -> 4,```**
* **```second output is -> undefined```**

##Notes*
Why do we get this result ? Pleas fix it

## 2. MODIFY FUNCTIONS
Write a function declaration that sums the two numbers you provide as arguments.
After that you should modify this function to Arrow and Expression functions.

## 3. WRITE A FUNCTION TO REVERSE A NUMBER
#### 3.1
Write a function that returns the reversed number for the given argument number value.

* **```reverseNum(123) ➞ 321```**
* **```reverseNum(3465) ➞ 5643```**
* **```reverseNum(1) ➞ 1```**

#### 3.2 
Use the built-in js function (reverse)

## 4. WHAT WILL RETURN THIS FUNCTION ?
What will be the output of the code below?

```ruby
const addOne = (a) => a + 1;
const multiplyTwo = (b) => b * 2;
const addOneMultTwo = (c) => multiplyTwo(addOne(c))

console.log(addOneMultTwo(5)) ➞ ?
```
## 5. TASK
We have the following arrays
```ruby
color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow “]; 
o = [“th","st","nd","rd"]
```
Write a JavaScript program to display the colors in the following way.

* **```"1st choice is Blue."```**
* **```"2nd choice is Green."```**
* **```"3rd choice is Red."```**
##Notes*
Use ordinal numbers to tell their position.

## 6. STRING IS A PALINDROME
Write a function that returns a boolean value based on whether the input string is palindrome or not.

* **```console.log(findPalindrome("bannana")) ➞ //false```**
* **```console.log(findPalindrome("racecar")) ➞ //true```**
* **```console.log(findPalindrome("madam")) ➞ //true```**

## 7. COUNT OF A LETTER IN A STRING
Write a function that takes two arguments, firs text and second letter. Find count of letter in given text and return count.

* **```console.log(letterCount("Connect",'c')) ➞ // 2```**
* **```console.log(letterCount("Connect",'e')) ➞ // 1```**
* **```console.log(letterCount("first person”,'s')) ➞ // 2```**

## 8. SORT
Write a JavaScript function that returns a passed string with letters in alphabetical order.

* **```Example string: ➞ 'webmaster'```**
* **```Expected Output: ➞ ‘abeemrstw'```**

## 9. PYRAMID
Write a function which will draw a pyramid. Function should receive a number as parameter and draw a pyramid with given number of raws. Pyramid should be presented as in the example below:

```ruby
* 
* * 
* * * 
* * * * 
* * * * * 
```

## 10. CALLBACK FUNCTION - LEVEL 1
You have to write the code depending on the requirement

#### Requirements:
1. The function should be named `addNumbers`.
2. The function should take three parameters: `num1` (a number), `num2` (a number), `andcallback` (a function)
3. The function should count sum of `num1` and `num2`
4. The function should call the `callback` function with the sum as its argument.
5. The `callback` function should log the sum to the console.

## 11. CALLBACK FUNCTION - LEVEL 2
You have to write the code depending on the requirement

#### Requirements:
1. Define a function called `applyCallbackToArray` that takes two parameters: an array of numbers and a `callback` function.
2. Inside the `applyCallbackToArray` function, create an empty array called `result`.
3. Loop through the input array using a for loop.
4. For each element in the input array apply the callback function and push the result into the `result` array.
5. `Callback` function should take a number as parameter and return it multiplied by 2.
6. After the loop is complete, return the `result` array.

## 12. RECURSION FUNCTION 
You have to write the code depending on the requirement

#### Requirements:
The function should take a single argument, a positive integer n, which represents the number to calculate the factorial using recursion.

* **```factorial(4) should return 24```**
* **```factorial(1) should return 1```**
* **```factorial(0) should return 1```**

## 13. HARD TASK
You have to write the code depending on the requirement

#### Requirements:

1. Have the function `StringChallenge(str)` read str which will contain two strings separated by a space.
2. The first string will consist of the following sets of characters: `+, *,` and `(N)` which is optional.
3. The plus `(+)` character represents a single alphabetic character, the asterisk ( * represents a sequence of the same character of length 3 unless it is followed by {N] which represents how many characters should appear in the sequence where N will be at least 1.
4. Your goal is to determine if the second string exactly matches the pattern of the first string in the input.

**FOR EXAMPLE**

if str is `“+**(5} gheeeee”` then the second string in this case does match the pattern,
so your program should return the string `true`.
If the second string does not match the pattern
your program should return the string `false`.
