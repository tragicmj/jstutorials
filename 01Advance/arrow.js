// const sayHello = function(name) {
//   return "Hey there, " + name + " !";
// };
// console.log(sayHello("sammy"));

const sayHello = name => {
  return `Hey there ${name}!`;
};
const sayHelloTwo = name => `Hey there ${name}!`;
// console.log(sayHello("sammy"));
// console.log(sayHelloTwo("sammy"));

const todos = [
  {
    title: "Buy Bread",
    isDone: true
  },
  {
    title: "Go to Gym",
    isDone: true
  },
  {
    title: "Record youtube video",
    isDone: false
  }
];
const thingsDone = todos.filter(todo => {
  return todo.isDone === true;
});
const thingsNotDone = todos.filter(todo => todo.isDone === false);
const thingsNotDoneTwo = todos.filter(todoFind => {
  if (todoFind.isDone === false) {
    return console.log(todoFind.title);
  }
});
// console.log(thingsDone);
//console.log(thingsNotDone);
const cameras = {
  price: 600,
  weight: 2000,
  myDes: function() {
    return `This canon camera is of ${this.price}$ and weighs ${this.weight}gm`;
  }
  // myDes: () => {
  //   return `This canon camera is of ${this.price}$ and weighs ${this.weight}gm`;
  // }
  // Don't use arrow functions in methods
};
console.log(cameras.myDes());
