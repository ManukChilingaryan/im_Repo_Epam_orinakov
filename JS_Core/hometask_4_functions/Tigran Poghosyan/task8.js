// SORT

function sortString(str) {
    const arr = [...str];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            const tmp = arr[j];
            if (arr[j] > arr[j + 1]) {
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }   
        }
    }

    let newStr = '';
    for (let i = 0; i < arr.length; i++) {
        newStr += arr[i]
    }

    return newStr;
}

console.log(sortString('webmaster'));

// Example string: ➞ 'webmaster'
// Expected Output: ➞ ‘abeemrstw'