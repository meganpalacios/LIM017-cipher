
const cipher = {
  code: (offset, text) => {
    /* const textArray = text.split('');
    const arrayLenght = textArray.lenght;
    console.log(textArray, arrayLenght);
    const letters = [];
    for (var i=0; i < arrayLenght; i++) {
      console.log(i);
      console.log(letters[i]);
      let letterAsciiValue = text.charCodeAt(i);
      console.log(letterAsciiValue);
      let letterNewAsciiValue = (letterAsciiValue - 65 + offset) % 26 + 65;
      console.log(letterNewAsciiValue);
      codedLetter = String.fromCharCode(letterNewAsciiValue);
      letters[i]= codedLetter;
      console.log(letters[i]);
    }
    const lettersToText = letters.join('');
    const codedMsg = document.getElementById('codedMsg');
    codedMsg.innerText = lettersToText; */
    let textToCodeAsciiValue = text.charCodeAt(0);
    console.log(textToCodeAsciiValue);
    let textToCodeNewAsciiValue = (textToCodeAsciiValue - 65 + offset) % 26 + 65;
    console.log(textToCodeNewAsciiValue);
    let codedText = String.fromCharCode(textToCodeNewAsciiValue);
    const codedMsg = document.getElementById('codedMsg');
    codedMsg.innerText = codedText;
  },
  decode: (offset, text) => {
    let textToDecodeAsciiValue = text.charCodeAt(0);
    console.log(textToDecodeAsciiValue);
    let textToDecodeNewAsciiValue = (textToDecodeAsciiValue - 65 - offset) % 26 + 65;
    console.log(textToDecodeNewAsciiValue);
    let decodedText = String.fromCharCode(textToDecodeNewAsciiValue);
    const decodedMsg = document.getElementById('decodedMsg');
    decodedMsg.innerText = decodedText;
  }
};

export default cipher;
