//  "is2 Thi1s T4est 3a" ? "This is a Test"
// "4of Fo1r pe6ople g3ood th5e the2" ? "For the good of the people";

function sortSentence(sentence) {
    const words = [];
    const arrDigits = [];
    let newStr = "";
    let flag = 0;
    sentence += " ";
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === " ") {
            for (let j = flag; j < i; j++) {
                newStr += sentence[j];
            }
            words.push(newStr);
            newStr = "";
            flag = i + 1;
        }
        if (!isNaN(sentence[i]) && sentence[i] !== " ") {
            arrDigits.push(+sentence[i])
        }
    }

   for (let i = 0; i < arrDigits.length; i++) {
        for (let j = 0; j < arrDigits.length; j++) {
            if (arrDigits[j] > arrDigits[j + 1]) {
                let tmpArr = words[j];
                let tmpDigits = arrDigits[j];
                words[j] = words[j + 1];
                arrDigits[j] = arrDigits[j + 1];
                
                words[j + 1] = tmpArr;
                arrDigits[j + 1] = tmpDigits;
            }
        }
    
    }

    return words;
}

console.log(sortSentence("4of Fo1r pe6ople g3ood th5e the2"));
console.log(sortSentence("is2 Thi1s T4est 3a"));

