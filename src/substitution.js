// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  //alphabet generator
  function _alphaGen(){
  const charSetArray = Array(26);
  for (let i = 0; i < charSetArray.length; i++){
    charSetArray[i] = String.fromCharCode((i + 97))
    }
    return charSetArray
  }

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    //check if the alphabet is provided, the right length or contains dublicate letters.
    if(!alphabet || alphabet.length != 26 || alphabet.search(/([a-z]).*?\1/) + 1 ) { return false }
    //Put user message, cipher alphabet, and  regular alphabet into arrays.
    const inputArr = input.toLowerCase().split("")
    const alphaArr = _alphaGen()
    const cipherArr = alphabet.toLowerCase().split("")
    const outputArr = []
    // loop through the alphabet, cipher alphabet and use find() to match each letter to the corresponding encode or decode letter.
    for (let i = 0; i < alphaArr.length; i++){
      inputArr.find((letter, index) =>{
        if (encode && letter == alphaArr[i]){
            outputArr[index] = cipherArr[i] 
        } else if (!encode && letter == cipherArr[i]) {
            outputArr[index] = alphaArr[i]
        } else if (letter == " " && (encode || !encode)) {
            outputArr[index] = " ";
        } 
      })
    }
    return outputArr.join("");
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
