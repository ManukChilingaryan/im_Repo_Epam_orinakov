// STRING IS A PALINDROME

function findPalindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str.at(-i - 1)) {
            return false;
        }   
    }
    return true;
}

console.log(findPalindrome("bannana"));
console.log(findPalindrome("racecar"));
console.log(findPalindrome("madam"));