const word1 = "Algorism"; //The word is Isogram
const word2 = "Password"; //The word isn’t isogram
const word3 = "PasSword"; //The word isn’t isogram
const word4 = "Unforgiveable"; //The word isn’t isogram
const word5 = "Moose"; //The word isn’t isogram

const words = [word1, word2, word3, word4, word5];

// Loop through each word
for (let i = 0; i < words.length; i++) {
  let word = words[i];
  let isRepeated = false;

  // Loop through each character in the word
  for (let j = 0; j < word.length; j++) {
    let char = word[j].toLowerCase();
     // Check if the character appears again in the word
    switch (word.slice(j + 1).toLowerCase().indexOf(char)) {
      case -1:
        // If the character doesn't appear again, continue to the next character
        break;
      default:
         // If the character appears again, the word is not an isogram
        console.log("The word isn’t isogram");
        isRepeated = true;
        break;
    }
    // If the word is not an isogram, break out of the character loop
    if (isRepeated) {
      break;
    }
  }
 // If the word is an isogram, print a message
  if (!isRepeated) {
    console.log("The word is Isogram");
  }
}