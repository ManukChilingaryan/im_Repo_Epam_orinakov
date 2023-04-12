const text = "the sky is blue" ;
const words = text.split(" ");
let reverse = "";
for(let i = words.length - 1; i >= 0; i--)
{
    reverse = reverse + words[i] + " ";
}
console.log(reverse);