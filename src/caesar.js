// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    
    // early exit for invalid values
    if (!shift || shift > 25 || shift < -25) return false;
    if (!encode) shift = -shift;
    
    // split input into array and set to lower case
    let inputArr = input.toLowerCase().split("");
    // decode message
    const decodedMessage = inputArr.map(letter => {
      let letterCode = letter.charCodeAt(0) - 97; // subtract 97 because in ASCII code the alphabet starts at 97 and ends at 122
      if (letterCode < 0 || letterCode > 26) return letter; // takes care of any characters not in the alphabet

      letterCode = letterCode + shift; // updates the ASCII code according to shift parameter
      if (letterCode < 0) letterCode += 26; // this will take care of wrapping the alphabet if shift is negative
      
      letterCode = letterCode % 26; // remainder of letterCode added with shift divided by alphabet length
      letterCode += 97; // gets back into the alphabet (between 97 and 122)

      return String.fromCharCode(letterCode); // converts letterCode value back into a string
    })
    
    return decodedMessage.join("")

    // do not edit below here
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };