const str1 = "Algorism";
const str2 = "Password";
const str3 = "PasSword";
const str4 = "Unforgiveable";
const str5 = "Moose";

for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str1.length; j++) {
        if (str1[i] === str1[j + i + 1]) {
            console.log('The word isn’t Isogram');   
            return;
        } 
    }

    if (i === str1.length - 1) {
        console.log('The word is isogram');
    } 
}