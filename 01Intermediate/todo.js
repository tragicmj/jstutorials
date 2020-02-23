const myTodos = ["Buy Bread", "Record videos for youtube", "Go to Gym"];
// myTodos.push("Buy Bread");
// myTodos.push("Record videos for youtube");
// myTodos.push("Go to Gym");
// myTodos.forEach(function(task, index) {
//   console.log(`Your tassk no. ${index + 1} is: ${task}  `);
// });
for (let i = 0; i < myTodos.length; i++) {
  console.log(`Your task no. ${i + 1} is to ${myTodos[i]}`);
}
