// CALLBACK FUNCTION - LEVEL 1

function addNumbers(num1, num2, andcallback) {
    const sum = num1 + num2;
    andcallback(sum);
}

addNumbers(5, 6, function andcallback(add) {
    console.log(add);
});