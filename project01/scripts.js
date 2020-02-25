// var h = document.createElement("h1");
// var myValue = document.createTextNode("Hello World!");

// h.appendChild(myValue);
// document.querySelector("h1").appendChild(h);

// var val = 5;
// while (val > 0) {
//   console.log(val);
//   val--;
// }

var ul = document.getElementById("list");
var li;
var addBtn = document.getElementById("add");
addBtn.addEventListener("click", addItem);

var removeBtn = document.getElementById("remove");
removeBtn.addEventListener("click", removeItem);

var removeAllBtn = document.getElementById("removeAll");
removeAllBtn.addEventListener("click", removeAllItem);

function addItem() {}

function removeItem() {
  //   console.log("Remove button clicked");
  li = ul.children;
  for (let index = 0; index < li.length; index++) {
    while (li[index] && li[index].children[0].checked) {
      ul.removeChild(li[index]);
    }
  }
}

function removeAllItem() {
  li = ul.children;
  for (let index = 0; index < li.length; index++) {
    ul.remove(li[index]);
  }
}
