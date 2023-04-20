//2. 
//Log to console "The word is Isogram" if word is isogram, and "The word isn’t isogram" if the word is not isogram. An isogram is a word that has no duplicate letters

const str1 = "Algorism";
const str2 = "Password";
const str3 = "PasSword";
const str4 = "Unforgiveable";
const str5 = "Moose";


// function for finding number of given letter in string

function countOfLetter (str, letter) {
    str = str.toLowerCase(); // makeing the strin lowercase, because lowercase and uppercase letters are not equal
    let countOfLetter = 0;
    for (let i = 0; i < str.length; i++) {
        if (letter === str[i])
        countOfLetter++;
    }
    return countOfLetter;
}

// function for checking if the word is isogram or not

function isIsogram (str) {
    for (let i = 0; i < str.length; i++) {
        if (countOfLetter(str, str[i]) > 1) {
            return 'The word is not isogram'
        }
    } 
    return 'The word is isogram'
}

console.log(isIsogram(str1));
console.log(isIsogram(str2));
console.log(isIsogram(str3));
console.log(isIsogram(str4));
console.log(isIsogram(str5));

// don't want to remove the old version

function isStrIsogram (str) {
    str = str.toLowerCase();
    let countOfLetter = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = i+1; j < str.length; j++) {
            if (str[i] === str[j]) {
                countOfLetter++;
            }
        } 
            if (countOfLetter >= 1) {
                return 'The word is not isogram'
            }
    }
    return 'The word is isogram'
}

console.log(isStrIsogram(str1));
console.log(isStrIsogram(str2));
console.log(isStrIsogram(str3));
console.log(isStrIsogram(str4));
console.log(isStrIsogram(str5));
