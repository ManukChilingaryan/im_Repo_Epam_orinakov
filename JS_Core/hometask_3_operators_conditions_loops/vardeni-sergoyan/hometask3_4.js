//4. Given a sentence with numbers representing a word's location 
//embedded within each word, log to the console the sorted sentence.

function mySplit(str, separator) {
    let temp = [];
    let i = 0;
    let lastWord = '';
    for (let j = 0; j < str.length; j++) {
        if(str[j] != separator) {
            lastWord = lastWord + str[j];
            temp[i] = lastWord;
        }
        else {
            i++;
            lastWord = ''
        }
    }
    return temp;
}

function sortedSentance(str) {
    const arr = mySplit(str, " ");
    sortedArr = [];
    let result = "";
    let i = 0, j;
    while(i < arr.length) {
        for(j = 0; j < arr[i].length; j++) {
            if(Number(arr[i][j])) {
                sortedArr[arr[i][j] - 1] = arr[i];
                break;
            }
        }
        i++;
    }
    i = 0;
    while(i < sortedArr.length) {
        for(let j = 0; j < sortedArr[i].length; j++) {
            if((sortedArr[i][j].charCodeAt(0) >= 65 && sortedArr[i][j].charCodeAt(0) <= 122))
                result += sortedArr[i][j];
            else     
                continue;
        }
        result += " ";
        i++;
    }
    return result;
}

// "is2 Thi1s T4est 3a" ? "This is a Test"
// "4of Fo1r pe6ople g3ood th5e the2" ? "For the good of the people"

console.log(sortedSentance("is2 Thi1s T4est 3a"));
console.log(sortedSentance("4of Fo1r pe6ople g3ood th5e the2"));
