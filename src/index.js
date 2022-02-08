import cipher from './cipher.js';

let agente;
const start = document.getElementById('start');
start.addEventListener('click', () => {
    let inicialV = document.getElementById('inicial').value;
    inicialV = inicialV.toUpperCase();
    console.log(inicialV);
    console.log(inicialV.length);
    let asciiValue = inicialV.charCodeAt(0);
    console.log(asciiValue);
    let isLetter;
    if (asciiValue > 64 && asciiValue < 91) {
        isLetter = true;
    } else {
        isLetter = false;
    }
    console.log(isLetter);
    if (inicialV.length == 1 && isLetter == true) {
        document.getElementById('home').style.display = 'none';
        document.getElementById('menu').style.display = 'block';
        agente = 'Agente ' + inicialV + '.';
        console.log('Hola, ' + agente);
        document.getElementById('welcome').innerHTML = ('Bienvenidx, ' + agente + '\nAquí en la web del espía podrás codificar mensajes para tus aliados y decodificar los de ellos.\nSuerte en tu próxima misión')
    } else if (isLetter == false || inicialV.length != 1) {
        alert('Ingreso no válido. Inténtalo de nuevo');
    }
})

const codificar = document.getElementById('codificar');
codificar.addEventListener('click', () => {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('code_page').style.display = 'block';
})

const decodificar = document.getElementById('decodificar');
decodificar.addEventListener('click', () => {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('code_page').style.display = 'inline';
})

console.log(cipher);
