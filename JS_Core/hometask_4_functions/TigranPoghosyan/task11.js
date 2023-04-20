// CALLBACK FUNCTION - LEVEL 2

function applyCallbackToArray (arrNums, callback) {
    const result = [];

    for (let i = 0; i < arrNums.length; i++) {
        
        result.push(callback(arrNums[i]))
    }

    return result;
}

console.log(applyCallbackToArray([5, 4, 3, 2], function callback(num) {
    return num * 2;
}));