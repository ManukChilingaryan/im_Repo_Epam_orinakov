//6. Write a JavaScript program to construct the following pattern, using a nested for loop.

let i, j;
let c = "";
for(let i = 0; i < 5; i++){
    for (let j = 0; j <= i; j++){
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