// && - AND operator
// || - OR operator

let isVerified = true;
let isLoggedIn = true;
let hasPaymentToken = false;
let isGuest = true;
if (isVerified && isLoggedIn & !hasPaymentToken) {
  console.log("Greeting");
  console.log("Grant Access");
} else if (isVerified || isGuest) {
  console.log("Greeting");
  console.log("Allowed free preview");
} else {
  console.log("Contact Admin");
}
