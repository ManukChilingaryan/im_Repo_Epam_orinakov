function sumDeclaration(a, b) {
    return a + b;
};

const sumArrow = (a, b) => a + b;
// or
// const sumArrow = (a, b) => {
//     return a + b;
// }

const sumExpression = function(a, b) {
    return a + b;
}

console.log(sumDeclaration(5, 4));
console.log(sumArrow(5, 4));
console.log(sumDeclaration(5, 4));