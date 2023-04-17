const addOne = (a) => a + 1;
const multiplyTwo = (b) => b * 2;
const addOneMultTwo = (c) => multiplyTwo(addOne(c))

console.log(addOneMultTwo(5));

// It will return 12, because first will be executed addOne function with parameter 5 and return 6,
// after that will be executed multiplyTwo function with parameter 6 and return 12,
// and so addOneMultTwo function will return 12;