//6. Write a JavaScript program to construct the following pattern, using a nested for loop.

let rowNumber, colNumber;
let c = "";
for(let rowNumber = 0; rowNumber < 5; rowNumber++){
    for (let colNumber = 0; colNumber <= rowNumber; colNumber++){
        c = c + "*" + " ";        
    }
    console.log(c); 
    c = "";    
}

// *  
// * * 
// * * *  
// * * * *
// * * * * *