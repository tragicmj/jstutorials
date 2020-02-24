function myValidation() {
  let myValue = document.getElementById("myform").value;
  if (isNaN(myValue) || myValue < 1 || myValue > 20) {
    console.log("Not a valid input");
    const invalid = document.getElementById("idone");
    invalid.textContent = "Not a valid input";
  } else {
    console.log("This input is cool");
    const valid = document.getElementById("idone");
    valid.textContent = "This input is cool";
  }
}

//form validation for reset
document.querySelector(".myForm").addEventListener("submit", event => {
  event.preventDefault();

  console.log(event.target.username.value);
  console.log(event.target.realname.value);
  event.target.username.value = " ";
  event.target.realname.value = " ";
});
//write a js to check two passwords and print password not same
