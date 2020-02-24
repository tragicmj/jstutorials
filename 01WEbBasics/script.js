// alert("File is attached");
// console.log(document);
// document.title = "I got changed";
// console.log(document.title);
// console.log(document.getElementById("idone"));
// console.log(document.getElementsByClassName("classone"));
// const myElement = document.querySelectorAll("#idone");
// console.log(myElement[0]);
// const myPElements = document.querySelector("p");
// myPElements.textContent = "I am being changed";

const myPElements = document.querySelectorAll("p");

myPElements.forEach(function(p) {
  // p.textContent = "I am changed using loop in js";
  //   p.remove();
});

// myPElements.forEach( p => {
//   p.textContent = "I am changed using loop in js";
// });

const myNewPara = document.createElement("h2");

myNewPara.textContent = "I was aaded via js";

document.querySelector("body").appendChild(myNewPara);

document.querySelector("button").addEventListener("click", event => {
  console.log("Button was pressed");
  event.target.textContent = "I was clicked";
});

//trackinput form
document.querySelector("#myform").addEventListener("input", event => {
  console.log(event.target.value);
});
