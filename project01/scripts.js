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

function addItem() {
  var input = document.getElementById("input");
  var item = input.value;
  ul = document.getElementById("list");
  var textnode = document.createTextNode(item);
  if (item === "") {
    var h = document.createElement("p");
    var myValue = document.createTextNode("Enter your todo");
    h.setAttribute("class", "random");
    h.appendChild(myValue);
    document.querySelector("li").before(h);
    return false;

    //Add a p tag and assign a value of "Enter your todo"
  } else {
    //create li
    li = document.createElement("li");
    //create checkbox
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.setAttribute("id", "check");
    //create label
    var label = document.createElement("label");
    label.setAttribute("for", "item");
    //add these elements on web page
    ul.appendChild(label);
    li.appendChild(checkbox);
    label.appendChild(textnode);
    li.appendChild(label);
    ul.insertBefore(li, ul.childNodes[0]);
    setTimeout(() => {
      li.className = "visual";
    }, 2);
    input.value = "";
  }
}

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
