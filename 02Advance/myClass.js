class User {
  constructor(firstname, middlename, lastname, credits) {
    this.firstname = firstname;
    this.middlename = middlename;
    this.lastname = lastname;
    this.credits = credits;
  }
  getFullName() {
    return `Full name is ${this.firstname}  ${this.middlename} ${this.lastname}`;
  }
  editName(newname) {
    const myname = newname.split(" ");
    this.firstname = myname[0];
    this.middlename = myname[1];
    this.lastname = myname[2];
  }
}
class Teacher extends User {
  constructor(firstname, middlename, lastname, credits, subject) {
    super(firstname, middlename, lastname, credits);
    this.subject = subject;
  }
  getFullName() {
    return `Full name is ${this.firstname}  ${this.middlename} ${this.lastname} and I study ${this.subject}`;
  }
}
const john = new Teacher("John", "Andreson", "rock", 34, "python");
console.log(john.getFullName());
john.editName("Johnny Andreson");
console.log(john.getFullName());
// const sammy = new User();
// console.log(sammy);
