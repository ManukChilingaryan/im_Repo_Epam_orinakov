// 5. For the following words find the first character that repeats.
// If there is no repeat of a character, return "-1".

const str1 = "legolas"
const str2 = "Gandalf"
const str3 = "Balrog"
const str4 = "Isildur"

//function for finding count of the letter in the string

function countOfLetter (str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    return count;
}

// if the count of the letter in the string bigger than 1, we are returning the letter, if the count is < 1, returning '-1'

function isRepeating (str) {
    for (let i = 0; i < str.length; i++) {
        if (countOfLetter(str, str[i]) > 1) {
            return str [i];
        }
    }
    return '-1';
}

console.log(isRepeating(str1));
console.log(isRepeating(str2));
console.log(isRepeating(str3));
console.log(isRepeating(str4));