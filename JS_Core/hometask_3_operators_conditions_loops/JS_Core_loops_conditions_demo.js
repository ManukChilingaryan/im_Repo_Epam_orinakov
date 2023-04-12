// // operator/operand, arguments, unary/binary

// let x = 25;
// let y = -x
// console.log(y)

// +, -, *, /, **, %
// binary/unary +
// let x = '2'
// let y = '3'
// console.log(+x + +y)

// // Assignment = returns value
// 1
// let x = 3;
// let y = 6;

// let z = 6 - (x = y + 1);
// 2
// let a, b, c;
// a = b = c = 2 * 5;

// // increment/decrement
// let counter = 2;
// counter++
// console.log(counter);

// let counter = 2;
// counter--
// console.log(counter);

// console.log(5++)
// // postfix/prefix form
// let counter = 4;
// let a = counter++;

// console.log(a);
// console.log(counter)

// let x = 5;

// console.log(++x);
// console.log(x);

// console.log(x++);
// console.log(x);

// // Comparisons/ string comparison
// let result = 5 > 3;
// console.log(result);

// console.log('Ani' > 'Ani')

// let a = 0;
// let b = '0';
// console.log(a === b)

// console.log( null > 0 );
// console.log( null == 0 );
// console.log( null >= 0 );
// console.log( undefined > 0 );
// console.log( undefined < 0 );
// console.log( undefined == 0 );
// console.log(null == undefined);
// console.log(null === undefined);


// // Conditional branching if, ?

// let age = 19;
// if (age > 18) console.log('welcome')

// let age = 19;
// if (age > 18) {
// console.log('welcome');
// console.log(`Your age is: ${age}`)
// }

// // 0, "", null, undefined and NaN -> false

// if(1) {
// console.log('yes!')
// }

// let age = true;
// if(age) {
// console.log('Yes!')
// }

// // else, else if

// let age = 7;

// if (age > 18) {
// console.log('welcome!')
// } else {
// console.log('go home!')
// }

// let age = 3;

// if (age > 18) {
// console.log('welcome!')
// } else if (age > 12) {
// console.log('hello, friend!')
// } else {
// console.log('go home!')
// }

// // Ternary operator ?

// let access;
// let age = 10;

// if (age >= 18) {
// access = true;
// } else {
// access = false;
// }
// console.log(access)

// access = age >= 18? true: false;
// console.log(access)

// let age = 18;

// let message = (age < 3) ? 'Hello, baby' :
// (age < 18) ? 'Hi' : (age < 100) ? 'Hello' : 'Wrong age';

// console.log( message );

// // instead of If
// let name = 'Ani';
// (name == 'Ani')? console.log('Hello, Ani'): console.log('Who are you?')

// // Logical operators
// // OR || traditional

// console.log(true || false);
// if(1 || 0) {
// console.log('Hi')
// }

// let age = 9;

// if (age < 18 || age > 6) {
// console.log( 'welcome!' );
// }

// // Additional OR || functionality
// let name = 'Ani' || 0 || null
// console.log(name)

// // AND && traditional
// console.log(true && true)

// let age = 9;
// let name = 'Ani'

// if (age == 9 && name == 'Ani') {
// console.log( `hello ${name}, your age is: ${age}` );
// }
// // Additional AND && functionality
// let name = 'Ani' && '0' && 'null'
// console.log(name)

// console.log(1 && 2 && null && 3)


// // ! Not

// console.log(!true)
// console.log(!0)
// console.log(!!0)

// // while

// let i = 5;
// while(i < 10) {
// console.log(i)
// i++;
// }

// while(i) {
// console.log(i)
// i--;
// }

// do {
// console.log(i)
// i++
// } while (i < 5)

// while(i < 5) {
// console.log(i)
// i++;
// }

// // for
// // let i;
// for (let i = 0; i < 10; i++) {
// console.log(i)
// }


// for (let i = 0; i < 10; i++) {
// if(i == 3) break;
// console.log(i)
// }

// for (let i = 0; i < 10; i++) {
// if(i == 3) continue;
// console.log(i)
// }

// // Switch case

// let name = "Ani";

// switch (name) {
// case 'Ani':
// console.log('Ani');
// break;
// case 'Marine':
// console.log('Marine');
// break;
// default:
// console.log('Wrong name')
// }

// let a = 2 + 2;

// switch (a) {
// case 3:
// console.log( 'hey' );
// case 4:
// console.log( 'hey hey' );
// case 5:
// console.log( 'hello' );
// default:
// console.log( 'hi' );
// }

// let a = '1';
// let b = 0

// switch (+a) {
// case b + 1:
// console.log( 'hey' );
// break;
// case 4:
// console.log( 'hey hey' );
// break;
// case 5:
// console.log( 'hello' );
// break;
// default:
// console.log( 'hi' );
// }