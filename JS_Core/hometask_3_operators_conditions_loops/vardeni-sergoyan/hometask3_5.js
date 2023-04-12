//5. For the following words find the first character that repeats. If there is no repeat of a character, return "-1".

//In this I considered that example in 'PasSword' there is not repeated character.
function findRepeats(str) {
    for(let i = 0; i < str.length; i++) {
        for(let j = i + 1; j < str.length; j++) {
            if(str[i] == str[j]) {
                return str[i];
            }
        }
    }
    return -1;
}

// "legolas" --- "l"
// "Gandalf" --- "a"
// "Balrog" --- "-1"
// "Isildur" --- "-1" 

console.log(findRepeats("legolas"));
console.log(findRepeats("Gandalf"));
console.log(findRepeats("Balrog"));
console.log(findRepeats("Isildur"));