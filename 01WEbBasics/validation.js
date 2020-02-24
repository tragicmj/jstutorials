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
