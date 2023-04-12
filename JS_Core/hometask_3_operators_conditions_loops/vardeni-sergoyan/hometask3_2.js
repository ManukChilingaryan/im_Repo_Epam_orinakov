//2. Log to console "The word is Isogram" if word is isogram, and "The word isn’t isogram" 
//if the word is not isogram. An isogram is a word that has no duplicate letters

function checkIsogram(str) {
    let d = false;
    let word = str.toLowerCase()
    //I think that "PasSword" is also isogram, and I hope it's not forbidden to use toLowerCase() method.
    //If it is forbidden, I'll implement that method 
    for(let i = 0; i < word.length; i++) {
        for(let j = i + 1; j < word.length; j++) {
            if(word[i] == word[j]) {
                d = true;
                console.log("The word isn’t isogram");
                return false;
            }
        }
    }
    console.log("The word is isogram");
    return true;
}

checkIsogram("Algorism");
checkIsogram("Password");
checkIsogram("PasSword");
checkIsogram("Unforgiveable");
checkIsogram("Moose");

