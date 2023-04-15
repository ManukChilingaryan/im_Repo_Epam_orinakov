/*
 "legolas" --- "l"
 "Gandalf" --- "a"
 "Balrog" --- "-1"
 "Isildur" --- "-1"
*/

function firstRepeat(word) {
    for (let i = 0; i < word.length; i++) {
        for (let j = i + 1; j < word.length; j++) {
            if (word[i] === word[j]) {
            return word[i]
           }
            
        }
        
    }

    return -1
}

console.log(firstRepeat("legolas"));
console.log(firstRepeat("Gandalf"));
console.log(firstRepeat("Balrog"));
console.log(firstRepeat("Isildur"));