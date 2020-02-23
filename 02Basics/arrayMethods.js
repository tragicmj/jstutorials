const numbers = ["One", "Two", "Three", "Four", "Five", "Six"];
// numbers[1] = "SOMETHING";
console.log(numbers);
//start
// console.log(numbers.shift());
// console.log(numbers);
// numbers.unshift("NOTHING");
// console.log(numbers);
//end
// console.log("The element to be deleted is : " + numbers.pop());
// console.log(numbers);
// numbers.push("Seven");
// console.log(numbers);
//middle
numbers.splice(2, 2, "testing", "trst");
console.log(numbers);
