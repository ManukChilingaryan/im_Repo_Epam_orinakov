//1. Reverse the following string word by word, the first word will be the last and so on. using loop

//  "the sky is blue" ----- "blue is sky the"

function reverseString1(str) {
    const strArr = str.split(' ');
    const resultStr = [];
    const length = strArr.length;

    for (let i = 0; i < length; i++) {
        resultStr[i] = strArr[length - 1 - i];
    }

    return resultStr.join(' ');
}


function reverseString2(str) {
    const strArr = str.split(' ');
    const resultStr = [];
    const length = strArr.length;
    let i = 0;

    while (i < length) {
        resultStr[i] = strArr[length - 1 - i];
        i++;
    }

    return resultStr.join(' ');
}

reverseString1("the sky is blue");
// 2. Log to console "The word is Isogram" if word is isogram, and "The word isn’t isogram" if the word is not isogram. An isogram is a word that has no duplicate letters.

// "Algorism"
// "Password"
// "PasSword"
// "Unforgiveable"
// "Moose"

function isIsogram(str) {
    const strArr = str.toLowerCase().split('');
    strArr.sort();

    for (let i = 0; i < strArr.length - 1; i++) {
        if (strArr[i] === strArr[i + 1]) {
            console.log("The word isn't Isogram");
            return;
        }
    }

    console.log("The word is isogram");
}

isIsogram("Unforgiveable");

// 3. Console to log the MINIMUM change required to make it a strong password. If it's already strong, return 0. A password is considered strong if all the following conditions are met:

//It has at least 8 characters and at most 20 characters.
//It contains at least one lowercase letter, one uppercase letter and one digit.
//It must NOT contain three repeating characters in a row (e.g. "...aaa..." is weak, but "...aa...a..." is strong, assuming other conditions are met).

// "ULTRAstrongP455w0rdthatstoolong" ---11
// "1234ABCD"   ---1
// "passAword123B!2%##4"---0
// "Arewehumanorarewecoders?" ---5

function strongPasswordChecker(password) {
    let count = 0;
    // Check length
    if (password.length < 8) {
        count += 8 - password.length;
    }

    // Check character types
    if (!/[a-z]/.test(password)) {
        count++;
    }
    if (!/[A-Z]/.test(password)) {
        count++;
    }
    if (!/\d/.test(password)) {
        count++;
    }

    // Check repeating characters
    let repeatCount = 0;
    for (let i = 0; i < password.length; i++) {
        let j = i;
        while (password[j] === password[i]) {
            j++;
        }
        if (j - i >= 3) {
            repeatCount += Math.floor((j - i) / 3);
            i = j - 1;
        }
    }

    if (password.length <= 20) {
        count += repeatCount;
    } else {
        const deleteCount = password.length - 20;
        repeatCount -= Math.min(deleteCount, Math.floor(repeatCount / 3));
        count += deleteCount + repeatCount;
    }
    return count;
}

strongPasswordChecker("ULTRAstrongP455w0rdthatstoolong");
//4. Given a sentence with numbers representing a word's location embedded within each word, log to the console the sorted sentence.

// "is2 Thi1s T4est 3a" ? "This is a Test"
// "4of Fo1r pe6ople g3ood th5e the2" ? "For the good of the people"

function logSortedSentence(str) {
    const words = str.split(' ');
    const arr = [];

    for (let i = 0; i < words.length; i++) {
        const temp = words[i];

        for (let j = 0; j < temp.length; j++) {
            if (temp[j] >= 0 && temp[j] <= 9) {
                arr[temp[j] - 1] = validWorld(temp, j);
                break;
            }
        }
    }

    console.log(arr.join(' '));
}

function validWorld(world, index) {
    return (world.slice(0, index) + world.slice(index + 1));
}

logSortedSentence("is2 Thi1s T4est 3a");

//5. For the following words find the first character that repeats. If there is no repeat of a character, return "-1".

// "legolas" --- "l"
// "Gandalf" --- "a"
// "Balrog" --- "-1"
// "Isildur" --- "-1"

function findFirstRepeat(world) {
    for (let i = 0; i < world.length - 1; i++) {
        for (let j = i + 1; j < world.length; j++) {
            if (world[i] === world[j]) {
                return world[j];
            }
        }
    }

    return -1;
}

findFirstRepeat("legolas");

//6. Writee a JavaScript program to construct the following pattern, using a nested for loop. ##

// *  
// * * 
// * * *  
// * * * *
// * * * * *

function constructPattern() {
    let triangle = '';

    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= i; j++) {
            triangle += '*';
        }
        console.log(triangle);
        triangle = '';
    }
}

constructPattern();