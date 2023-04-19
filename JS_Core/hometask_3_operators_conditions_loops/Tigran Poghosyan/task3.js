function isStrong(password) {
    let require = 0;
    if (password.length < 8) {
        require = 8 - password.length;
    }
    
    if (password.length > 20) {
        require = password.length - 20;
    }
    let upperCaseExist, lowerCaseExist, numericExist = false;

    for (let i = 0; i < password.length; i++) {

        if (password[i] === password[i + 1] && password[i + 1] === password[i + 2]) {
            require++;
        }
        
        if (password[i].toUpperCase() !== password[i]) {
            upperCaseExist = true;
        }

        if (password[i].toLowerCase() !== password[i]) {
            lowerCaseExist = true;
        }
        
        if (password[i] >= '0' && password[i] <= '9') {
            numericExist = true
        }
    }
    
    if (!upperCaseExist) {
        require++
    }
    if (!lowerCaseExist) {
        require++
    }
    if (!numericExist) {
        require++
    }
    return require   

}

console.log(isStrong('ULTRAstrongP455w0rdthatstoolong'));
console.log(isStrong('1234ABCD'));
console.log(isStrong('passAword123B!2%##4'));
console.log(isStrong('Arewehumanorarewecoders?'));
