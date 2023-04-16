// 1. Reverse the following string word by word, the first word will be the last and so on. using loop

const str = 'the sky is blue';     

let revStr =''; // variable for reversed string

const strWordsArr = []; // array for pushing seperated words of string

let strWord = '';  

    for(let i = 0; i < str.length; i++) { 
        if(str[i] !== ' ') {
          strWord += str[i];
         } else if (strWord.trim()){ 
          strWordsArr.push(strWord);
          strWord = ""; 
        }
    }
    if(strWord){
       strWordsArr.push(strWord);
    }

    for (let i = strWordsArr.length-1; i >= 0; i--) {
        revStr += strWordsArr[i] + ' ';
    }

 console.log(revStr);
