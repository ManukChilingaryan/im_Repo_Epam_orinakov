const color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"]; 
const o = ["th", "st", "nd", "rd"];

function displayColors(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (i < arr2.length - 1) {
            console.log(`${i + 1}${arr2[i + 1]} choice is ${arr1[i]}.`);
        } else {
            console.log(`${i + 1}${arr2[0]} choice is ${arr1[i]}.`);
        }
        
    }
}

displayColors(color, o);