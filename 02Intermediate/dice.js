let numOne = 22;
let numTwo = 7;
result = 22 / 7;
//to make round upto two values for example 3.149876 becomes 3.14
// console.log(result.toFixed(2));
// let floatRes = result.toFixed(2);
// console.log(Math.floor(floatRes));
// console.log(Math.ceil(floatRes));
//if we don't add 1 then the number obtained will be less than 5 always
//console.log(Math.random() * 5 + 1);
let upper = 25;
let lower = 20;
//the number will be in the range of 20 and 26
let myRandom = Math.random() * (upper - lower + 1) + lower;
console.log(Math.floor(myRandom));
