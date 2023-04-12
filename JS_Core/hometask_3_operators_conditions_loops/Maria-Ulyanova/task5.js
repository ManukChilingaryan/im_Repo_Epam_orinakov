const word1 = "legolas"; //l
const word2 = "Gandalf"; //a
const word3 = "Balrog"; //-1
const word4 = "Isildur"; //-1

const words = [word1, word2, word3, word4];

// Iterate over each word in the array.
for (let i = 0; i < words.length; i++) {
  let word = words[i];
  let isRepeated = false;

   // Iterate over each character in the current word.
  for (let j = 0; j < word.length; j++) {
    let char = word[j];

    // Compare the current character to all subsequent characters in the word.
    for (let k = j + 1; k < word.length; k++) {
      if (char === word[k]) {
        console.log(char);
        isRepeated = true;
        break;
      };
    };
    
    // If a repeated character has been found, break out of the loop.
    if (isRepeated) {
      break;
    };
  };
  
  // If no repeated characters have been found, print -1.
  if (!isRepeated) {
    console.log(-1);
  };
};