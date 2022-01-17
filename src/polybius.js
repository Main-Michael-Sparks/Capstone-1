// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function _isNum(numString) {
    //checks to see if a string is made up of numbers or not

    //reversing the NaN bool to make it less counter-intuitive
    return Number.isNaN(Number(numString.split(" ").join(""))) ? false : true;
  }

  function _twoDigitNumSplit(numString) {
    //splits a string into two character segments, and puts those segments into an array.
    
    //set output array, and a container for holding the two digit string segments
    const doubleDigitArray = [];
    let doubleDigitContainer = "";
    //loop through the 'numString' by length.
    for (let i = 0; i < numString.length; i++) {
      //if the 'numString' arg contains spaces, preserve those spaces.
      if (numString[i] === " ") {
        doubleDigitArray.push(" ");
        //if the 'numString' string current index is not a space, put that character into the digit container
      } else if (numString[i] !== " ") {
        doubleDigitContainer += numString[i];
        //if the 'doubleDigitContainer' has two num characters; put the pair into the digit array and reset the digit container.
        if (doubleDigitContainer.length == 2) {
          doubleDigitArray.push(doubleDigitContainer);
          doubleDigitContainer = "";
        }
      }
    }
    return doubleDigitArray;
  }

  function polybius(input, encode = true) {
    //early close if a 'number string' input is not of even length.
    if (_isNum(input) && input.split(" ").join("").length % 2 != 0) {
      return false;
    }

    //alphabet object, user input array and output array.
    const alphabet = {
      a: "11", b: "21", c: "31", d: "41", e: "51",
      f: "12", g: "22", h: "32", "i/j": "42", k: "52",
      l: "13", m: "23", n: "33", o: "43", p: "53",
      q: "14", r: "24", s: "34", t: "44", u: "54",
      v: "15", w: "25", x: "35", y: "45", z: "55",
    };

    const userInput = [];
    const outputArr = [];

    //checks to see if the input is made of letter characters or digits; if digits runs them through a spliting process.
    if (!_isNum(input)) {
      userInput.push(...input.toLowerCase().split(""));
    } else if (_isNum(input)) {
      userInput.push(..._twoDigitNumSplit(input));
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
