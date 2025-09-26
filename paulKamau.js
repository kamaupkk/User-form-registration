function isEven(num) {
  //Check if the num divided by two is a whole number
  if (Number.isInteger(num / 2)) {
    return true;
  } else {
    return false;
  }
}

// Test cases
console.log(isEven(4)); //Expected output: true
console.log(isEven(7)); //Expected output: false
console.log(isEven(-2)); //Expected output: true
