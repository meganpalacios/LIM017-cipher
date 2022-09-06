const cipher = {
  encode: (offset, text) => {
    const textArray = text.split('');
    const arrayLength = textArray.length;
    const encodedLetters = [];
    function isLetter(number) {
      if (number > 64 && number < 91) {
        return true;
      } else {
        return false;
      }
    }
    for (let i=0; i < arrayLength; i++) {
      let letterAsciiValue = text.charCodeAt(i);
      let letterNewAsciiValue;
      if (isLetter(letterAsciiValue) === false) {
        letterNewAsciiValue = letterAsciiValue;
      } else if (isLetter(letterAsciiValue) === true) {
        letterNewAsciiValue = (letterAsciiValue - 65 + offset) % 26 + 65;
      }
      const encodedLetter = String.fromCharCode(letterNewAsciiValue);
      encodedLetters.push(encodedLetter);
    }
    const encodedLettersToText = encodedLetters.join('');
    return encodedLettersToText;
  },
  decode: (offset, text) => {
    const textArray = text.split('');
    const arrayLength = textArray.length;
    const decodedLetters = [];
    function isLetter(number) {
      if (number > 64 && number < 91) {
        return true;
      } else {
        return false;
      }
    }
    for (let i=0; i < arrayLength; i++) {
      let letterAsciiValue = text.charCodeAt(i);
      let letterNewAsciiValue;
      if (isLetter(letterAsciiValue) === false) {
        letterNewAsciiValue = letterAsciiValue;
      } else if (isLetter(letterAsciiValue) === true) {
        letterNewAsciiValue = (letterAsciiValue - 90 - offset) % 26 + 90;
      }
      const decodedLetter = String.fromCharCode(letterNewAsciiValue);
      decodedLetters.push(decodedLetter);
    }
    const decodedLettersToText = decodedLetters.join('');
    return decodedLettersToText;
  }
}

export default cipher;