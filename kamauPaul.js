function reverseString(str) {
  let reversedStr = "";

  // Loop backwards through the string
  for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
}

     return reversedStr;
}

// Tests
console.log(reverseString("hello")); // Expected output:"olleh"
console.log(reverseString("12345")); // Expected output:"54321"
console.log(reverseString("")); // Expected output:""
