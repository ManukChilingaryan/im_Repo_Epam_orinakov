/*
reverseNum(123) ➞ 321
reverseNum(3465) ➞ 5643
reverseNum(1) ➞ 1
*/

function reverseNum(num) {
    let newNum = "";
    while (num >= 1) {
        num = parseInt(num) / 10;
        newNum += Math.round((num % 1) * 10);
    }
    return +newNum
}

console.log(reverseNum(123));
console.log(reverseNum(3465));
console.log(reverseNum(1));