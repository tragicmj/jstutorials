// let sayHello = function(name) {
//   console.log(`Greeting message for ${name}`);
//   console.log(`Hey ${name}`);
// };
// sayHello("John");
// let fullNameMaker = function(firstname, lastname) {
//   console.log("Welcome to LCO");
//   console.log(`Happy to habe you, ${firstname} ${lastname}`);
// };
// fullNameMaker("John", "Doe");
// let myAdder = function(num1, num2) {
//   let added = num1 + num2;
//   return added;
// };
// let result = myAdder(4, 5);
// console.log(result);
// let myMultiplier = function(num1, num2) {
//   return (mul = num1 * num2);
// };
// let results = myMultiplier(4, 5);
// console.log(results);

let guestUser = function(name = "User", courseCount = 0) {
  return "Hello " + name + " and your course count is " + courseCount;
};
console.log(guestUser("John", 1));
