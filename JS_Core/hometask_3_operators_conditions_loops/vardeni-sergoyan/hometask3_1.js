//1. Reverse the following string word by word, the first word will be the last and so on. using loop

function reverseString(str) {
    const arr = mySplit(str, " ");
    let result = " ";
    let start = 0, end = arr.length - 1;
    while(start <= end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    start = 0;
    end = arr.length -1;
    while(start <= end) {
        for(let i = 0; i < arr[start].length; i++) {
            result += arr[start][i];
        }
        result += " ";
        start++;
    }
    return result;
}

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
  
  const str = "the sky is blue";
  console.log(reverseString(str));
