import cipher from './cipher.js';

let agente;
const start = document.getElementById('start');
start.addEventListener('click', () => {
    let initialV = document.getElementById('initial').value;
    initialV = initialV.toUpperCase();
    let asciiValue = initialV.charCodeAt(0);
    let isLetter;
    if (asciiValue > 64 && asciiValue < 91) {
        isLetter = true;
    } else {
        isLetter = false;
    }
    console.log(isLetter);
    if (isLetter == true) {
        document.getElementById('home').style.display = 'none';
        document.getElementById('menu').style.display = 'block';
        agente = 'Agente ' + initialV + '.';
        document.getElementById('welcome').innerText = ('Bienvenidx, ' + agente + '\nSuerte en tu próxima misión')
    } else if (isLetter == false || initialV.length === 0) {
        alert('Ingreso inválido. Inténtalo de nuevo');
    }
})

const goToEncode = document.getElementById('goToEncode');
goToEncode.addEventListener('click', () => {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('encode_page').style.display = 'inline';
})

const goToDecode = document.getElementById('goToDecode');
goToDecode.addEventListener('click', () => {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('decode_page').style.display = 'inline';
})

let textToEncode = document.getElementById('textToEncode');
textToEncode.addEventListener('keyup', () =>{
    let textToEncodeV = textToEncode.value;
    textToEncodeV = textToEncodeV.toUpperCase();
    textToEncode.value = textToEncodeV;
})

let textToDecode = document.getElementById('textToDecode');
textToDecode.addEventListener('keyup', () =>{
    let textToDecodeV = textToDecode.value;
    textToDecodeV = textToDecodeV.toUpperCase();
    textToDecode.value = textToDecodeV;
})

const callEncodeFn = document.getElementById('callEncodeFn');
callEncodeFn.addEventListener('click', () => {
    let offsetE = document.getElementById('offsetC').value;
    offsetE = parseInt(offsetE);
    let textToEncodeV = document.getElementById('textToEncode').value;
    console.log(textToEncodeV);
    let encodeReturn = cipher.encode(offsetE, textToEncodeV);
    let encodedMsg = document.getElementById('encodedMsg');
    encodedMsg.innerText = encodeReturn;
})

const callDecodeFn = document.getElementById('callDecodeFn');
callDecodeFn.addEventListener('click', () => {
    let offsetD = document.getElementById('offsetD').value;
    offsetD = parseInt(offsetD);
    let textToDecodeV = document.getElementById('textToDecode').value;
    console.log(textToDecodeV);
    let decodeReturn = cipher.decode(offsetD, textToDecodeV);
    let decodedMsg = document.getElementById('decodedMsg');
    decodedMsg.innerText = decodeReturn;
})

function showMenu() {
    document.getElementById('encode_page').style.display = 'none';
    document.getElementById('decode_page').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
}
const backToMenu1 = document.getElementById('backToMenu1')
backToMenu1.addEventListener('click', showMenu)
const backToMenu2 = document.getElementById('backToMenu2')
backToMenu2.addEventListener('click', showMenu)

console.log(cipher);