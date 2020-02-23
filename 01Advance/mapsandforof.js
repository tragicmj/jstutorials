var john = {
  name: "I am John",
  age: 24,
  isActive: true
};

var marry = {
  name: "I am Marry",
  age: 23,
  isActive: true
};

var sam = {
  name: "I am sam",
  age: 29,
  isActive: false
};

let users = new Map();

users.set("john", john);
users.set("marry", marry);
users.set("sam", sam);

// console.log(users.size);

// console.log(users.get("john"));

// console.log(users.keys());
// console.log(users.values());

// for (const value of users.values()) {
//   console.log(value.name);
// }

for (const [key, value] of users.entries()) {
  console.log(key + " = " + value.name);
  //Assignment convert the above lines in literals
}

users.forEach((value, key) => console.log(key + " = " + value.name));
