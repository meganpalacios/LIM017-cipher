import cipher from './cipher.js';

let agente;
const start = document.getElementById('start');
start.addEventListener('click', () => {
    let initialV = document.getElementById('initial').value;
    initialV = initialV.toUpperCase();
    console.log(initialV);
    let asciiValue = initialV.charCodeAt(0);
    console.log(asciiValue);
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
        console.log('Hola, ' + agente);
        document.getElementById('welcome').innerText = ('Bienvenidx, ' + agente + '\nAquí en la web del espía podrás codificar mensajes para tus aliados y decodificar los de ellos.\nSuerte en tu próxima misión')
    } else if (isLetter == false || initialV.length === 0) {
        alert('Ingreso inválido. Inténtalo de nuevo');
    }
})

const goToCode = document.getElementById('goToCode');
goToCode.addEventListener('click', () => {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('code_page').style.display = 'inline';
})

const goToDecode = document.getElementById('goToDecode');
goToDecode.addEventListener('click', () => {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('decode_page').style.display = 'inline';
})

const callCodeFn = document.getElementById('callCodeFn');
callCodeFn.addEventListener('click', () => {
    let offsetPin = document.getElementById('offsetC').value;
    let textToCodeV = document.getElementById('textToCode').value;
    textToCodeV = textToCodeV.toUpperCase();
    console.log(textToCodeV);
    cipher.code(offsetPin, textToCodeV);
})

const callDecodeFn = document.getElementById('callDecodeFn');
callDecodeFn.addEventListener('click', () => {
    let offsetPin = document.getElementById('offsetD').value;
    let textToDecodeV = document.getElementById('textToDecode').value;
    textToDecodeV = textToDecodeV.toUpperCase();
    console.log(textToDecodeV);
    cipher.decode(offsetPin, textToDecodeV);
})
console.log(cipher);