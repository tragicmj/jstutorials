//localStorage.setItem("hero", "thor");
localStorage.setItem("todo", "Buy Coffee");
localStorage.setItem("todo", "Record Youtube Videos");
var myHero = localStorage.getItem("hero");
console.log(myHero);
localStorage.removeItem("todo");

console.log(localStorage.getItem("todo"));
