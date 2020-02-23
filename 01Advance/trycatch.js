const convertToRs = dollar => {
  if (typeof dollar === "number") {
    return dollar * 71.23;
  } else {
    throw Error("Amount needs to be in number");
  }
};

try {
  const myValue = convertToRs("five");
  console.log(myValue.toFixed(2));
} catch (error) {
  console.log(error);
}
console.log("I will not run if program crashes");
