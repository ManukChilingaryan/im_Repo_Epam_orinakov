//3. Console to log the MINIMUM change required to make it a strong password. 
//If it's already strong, return 0. A password is considered strong if all the following conditions are met:

function checkUpperCase(pw) {
    for(let i = 0; i < pw.length; i++) {
        if(pw[i].charCodeAt(0) >= 65 && pw[i].charCodeAt(0) <= 96)
            return true;
    }
    return false;
}

function checkLowerCase(pw) {
    for(let i = 0; i < pw.length; i++) {
        if(pw[i].charCodeAt(0) >= 97 && pw[i].charCodeAt(0) <= 122){
            return true;
        }
    }
    return false;
} 

function checkNumber(pw) {
    for(let i = 0; i < pw.length; i++) {
        if(Number(pw[i]))
            return true;
    }
    return false;
}

function checkStrong(pw) {
    let change = 0;

    //first condition-y amenaverjum em grel, vorovhetev 3rd u arajin conditionneri jamanak es ham change-eri tivn em avelacnum, ham el length-n 
    //em pakasacnum kaxvac paymanic, orinak ete ...aaa... senc depq ka, es miangamic length-ic hanum em 1, nor verjum length-i hamar stugum 8-20
    //mijakayjqy

    //third condition
    let length = pw.length;
    let i = 0, j, count = 0;
    while(i < pw.length) {
        j = pw[i];
        count = 0;
        if(pw[i + 1] == j) {
           while(pw[i] == j){
               count++;
               i++;
            }
        }
        if(count >= 3) {
            length -= count - 2;
            change += count -2;
        }
        i++;
    }

    //second condition
    if(!checkUpperCase(pw)) {
        change += 1;
        length += 1;
    }

    if(!checkLowerCase(pw)) { 
        change += 1;
        length += 1;
    }

    if(!checkNumber(pw)) {
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
console.log(checkStrong("Arewehumanorarewecoders?"));