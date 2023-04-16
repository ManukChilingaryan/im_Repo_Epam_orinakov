// PYRAMID

function pyramid(num) {
    let star = "";

    for (let i = 1; i <= num; i++) {
        for (let j = num; j >= 1; j--) {
            if (i >= j) {
                star += "* ";
            } else {
                star += " ";
            } 
        }
        star += "\n";
    }  
    return star;
}

console.log(pyramid(5));