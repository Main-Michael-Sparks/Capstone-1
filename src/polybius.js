// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    //below are function scope var declarations, 1 object, two arrays and 'is a number check'
    const alphabet = {
      a: "11",
      b: "21",
      c: "31",
      d: "41",
      e: "51",
      f: "12",
      g: "22",
      h: "32",
      "i/j": "42",
      k: "52",
      l: "13",
      m: "23",
      n: "33",
      o: "43",
      p: "53",
      q: "14",
      r: "24",
      s: "34",
      t: "44",
      u: "54",
      v: "15",
      w: "25",
      x: "35",
      y: "45",
      z: "55",
    };
    const userInput = [];
    const outputArr = [];
    const inputCheck = Number.isNaN(Number(input.split(" ").join("")));

    if (!inputCheck && input.split(" ").join("").length % 2 != 0) {
      //check if the number input is even or not.
      return false;
    }
    //Check if input string is 'letters' or numbers.
    if (inputCheck) {
      userInput.push(...input.toLowerCase().split("")); //if the input string is 'letters', put each letter into the user input array
    } else {
      // if the input string is 'numbers' split the numbers into pairs (two digits) and put each pair into an array element.
      let numTransferVar = "";
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
          userInput.push(" ");
        } else {
          numTransferVar += input[i];
          if (numTransferVar.length == 2) {
            userInput.push(numTransferVar);
            numTransferVar = "";
          }
        }
      }
    }
    //if encode or decode is set, loop through and set the corresponding key:value pair. 
    userInput.forEach((element) => {
      if (encode) {
        for (let key in alphabet) {
          if (key === element) {
            outputArr.push(alphabet[key]);
          }
        }
        if (element === "i" || element === "j") {
          outputArr.push(alphabet["i/j"]);
        } else if (element === " ") {
          outputArr.push(" ");
        }
      } else if (!encode) {
        if (element === "42") {
          outputArr.push(Object.keys(alphabet)[8]);
        } else if (element === " ") {
          outputArr.push(" ");
        } else {
          for (let key in alphabet) {
            if (alphabet[key] === element) {
              outputArr.push(key);
            }
          }
        }
      }
    });
    return outputArr.join("");
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };

