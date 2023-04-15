//3. Console to log the MINIMUM change required to make it a strong password. 
//If it's already strong, return 0. A password is considered strong if all the following conditions are met:

function checkUpperCase(password) {
    for(let i = 0; i < password.length; i++) {
        if(password[i].charCodeAt(0) >= 65 && password[i].charCodeAt(0) <= 96)
            return true;
    }
    return false;
}

function checkLowerCase(password) {
    for(let i = 0; i < password.length; i++) {
        if(password[i].charCodeAt(0) >= 97 && password[i].charCodeAt(0) <= 122){
            return true;
        }
    }
    return false;
} 

function checkNumber(password) {
    for(let i = 0; i < password.length; i++) {
        if(Number(password[i]))
            return true;
    }
    return false;
}

function checkStrong(password) {
    let change = 0;

    //first condition-y amenaverjum em grel, vorovhetev 3rd u arajin conditionneri jamanak es ham change-eri tivn em avelacnum, ham el length-n 
    //em pakasacnum kaxvac paymanic, orinak ete ...aaa... senc depq ka, es miangamic length-ic hanum em 1, nor verjum length-i hamar stugum 8-20
    //mijakayjqy

    //third condition
    let length = password.length;
    let i = 0, j, countOfReapetedCharacters = 0;
    while(i < password.length) {
        j = password[i];
        countOfReapetedCharacters = 0;
        if(password[i + 1] == j) {
            while(password[i] == j){
                countOfReapetedCharacters++;
                i++;
            }
        }
        if(countOfReapetedCharacters >= 3) {
            length -= countOfReapetedCharacters - 2;
            change += countOfReapetedCharacters -2;
        }
        i++;
    }

    //second condition
    if(!checkUpperCase(password)) {
        change += 1;
        length += 1;
    }

    if(!checkLowerCase(password)) { 
        change += 1;
        length += 1;
    }

    if(!checkNumber(password)) {
        change += 1;
        length += 1;
    }

    //first condition
    if(length < 8)
        change += 8 - length;
    else if(length > 20)
        change += length - 20;

    return change;
}

// "ULTRAstrongP455w0rdthatstoolong" ---11
// "1234ABCD"   ---1
// "passAword123B!2%##4"---0
// "Arewehumanorarewecoders?" ---5

console.log(checkStrong("ULTRAstrongP455w0rdthatstoolong"));
console.log(checkStrong("1234ABCD"));
console.log(checkStrong("passAword123B!2%##4"));
console.log(checkStrong("Arewehumanorarewecoders?"));