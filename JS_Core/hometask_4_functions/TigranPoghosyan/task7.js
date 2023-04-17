// COUNT OF A LETTER IN A STRING

function letterCount(str, letter) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === letter.toLowerCase()) {
            count++
        }
    }
    return count;
}


console.log(letterCount('Connect', 'c')); // 2
console.log(letterCount('Connect', 'e')); // 1
console.log(letterCount('first person','s')); // 2