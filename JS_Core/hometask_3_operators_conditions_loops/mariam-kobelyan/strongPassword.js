// 3. Console to log the MINIMUM change required to make it a strong password. 
// If it's already strong, return 0. A password is considered strong if all the following conditions are met:
// It has at least 8 characters and at most 20 characters.
// It contains at least one lowercase letter, one uppercase letter and one digit.
// It must NOT contain three repeating characters in a row 
// (e.g. "...aaa..." is weak, but "...aa...a..." is strong, assuming other conditions are met).

const pass1 = 'ULTRAstrongP455w0rdthatstoolong'; // 11
const pass2 = '1234ABCD'; // 1
const pass3 = 'passAword123B!2%##4'; // 0
const pass4 = 'Arewehumanorarewecoders?'; // 5

function passChangeCount(pass) {
    let count = 0;
    let upperCase = false;
    let lowerCase = false;
    let digit = false;
    let noCharInRow = false;

    for (let i = 0; i < pass.length; i++) { // 'digit' din't worked when i wrote this 'if' functions with 'else if', can't understand why
        if (pass[i] === pass[i].toUpperCase()) {
            upperCase = true;
        } else if (pass[i] === pass[i].toLowerCase()) {
            lowerCase = true;
        } 
        if (pass[i] == +pass[i]) { 
            digit = true;
        } else if (pass[i] === pass[i + 1] === pass[i + 2]) {
            noCharInRow = true
        }
    }

    if (!upperCase) {
        count++;
    }
    if (!lowerCase) {
        count++;
    }
    if (!digit) {
        count++;
    }
    if (noCharInRow) {
        count++;
    }
    if (pass.length < 8) {
        count += 8 - pass.length;
    }
    if (pass.length > 20) {
        count += pass.length - 20;
    }

    return count
}

console.log(passChangeCount(pass1))
console.log(passChangeCount(pass2))
console.log(passChangeCount(pass3))
console.log(passChangeCount(pass4))