const str = "the sky is blue";

function reverseWords(str) {
    const words = [];
    let word = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== " ") {
        word += str[i];
      } else if (word) {
        words.push(word);
        word = "";
      }
    }
    if (word) {
      words.push(word);
    }
    let reversed = "";
    for (let j = words.length - 1; j >= 0; j--) {
      reversed += words[j] + " ";
    }

  return reversed;
}
  
console.log(reverseWords(str));