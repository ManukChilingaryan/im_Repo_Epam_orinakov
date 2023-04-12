// 6. Write a JavaScript program to construct the following pattern, using a nested for loop. ##
// *  
// * * 
// * * *  
// * * * *
// * * * * *

for (let i = 1; i <= 5; i++) {
    let asterisk = ' ';

    for (let j = 0; j < i; j++) {
        asterisk += '*' + ' '; 
    }
    
    console.log(asterisk);
}