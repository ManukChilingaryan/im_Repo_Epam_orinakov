// 4. Given a sentence with numbers representing a word's location embedded within each word, 
//log to the console the sorted sentence.
// "is2 Thi1s T4est 3a" ? "This is a Test"
//  "4of Fo1r pe6ople g3ood th5e the2" ? "For the good of the people"

const str1 = 'is2 Thi1s T4est 3a'
const str2 = '4of Fo1r pe6ople g3ood th5e the2'

// 1. create a new array containing all numbers from given string
function numberArr (str) {
    const arr = [];
    for (let i = 0; i < str.length; i++) {
        if (+str[i] === +str[i] && str[i] !== ' ') {
            arr.push(str[i]) ;
        }
    }
    return arr;
}

// 2. remove all numbers from given string
function noNumStr (str) {
    let noNumStr = '';
    for (let i = 0; i < str.length; i++) {
        if (+str[i] !== +str[i] || str[i] === ' '){
            noNumStr += str[i];
        }
    }
    return noNumStr;
}

// 3. revert string into array of words
function revertToArray (str) { 
    const strArr = [];
    let word = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            word += str[i];
        } else if (word.trim()) {
            strArr.push(word);
            word = '';
        }
    }
    if (word){
        strArr.push(word);
    }
    return strArr;
}

// 4. function for swaping places of elements in a given array
function swapPlace (arr, index) {
    let head = arr.slice(0, index);
    let tail = arr.slice(index + 2);
    return [...head, arr[index + 1], arr[index], ...tail];
}

//5. sort string using previous functions
function sortStrArr (str) {
    let arr = revertToArray(noNumStr(str));
    let numArr = numberArr(str);
    for (let i = 0; i < numArr.length; i++) {
        for (let j = 0; j < numArr.length; j++) {
            if (numArr[j] > numArr[j+1]) {
                arr = swapPlace(arr, j);
                numArr = swapPlace(numArr, j);
            }
        }
    }
    return arr.join(' ');
}

console.log(sortStrArr(str1))
console.log(sortStrArr(str2))

