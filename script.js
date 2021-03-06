const textRef = {
   "a": ".-",
   "b": "-...",
   "c": "-.-.",
   "d": "-..",
   "e": ".",
   "f": "..-.",
   "g": "--.",
   "h": "....",
   "i": "..",
   "j": ".---",
   "k": "-.-",
   "l": ".-..",
   "m": "--",
   "n": "-.",
   "o": "---",
   "p": ".--.",
   "q": "--.-",
   "r": ".-.",
   "s": "...",
   "t": "-",
   "u": "..-",
   "v": "...-",
   "w": ".--",
   "x": "-..-",
   "y": "-.--",
   "z": "--..",
   " ": "/",
    0: '-----',
    1: '.----',
    2: '..---',
    3: '...--',
    4: '....-',
    5: '.....',
    6: '-....',
    7: '--...',
    8: '---..',
    9: '----.',
    '&': '.-...',
    "'": '.----.',
    '@': '.--.-.',
    $: '···−··−',
    ')': '-.--.-',
    '(': '-.--.',
    ':': '---...',
    ',': '--..--',
    ';': '−·−·−·',
    '=': '-...-',
    '!': '-.-.--',
    '.': '.-.-.-',
    '-': '-....-',
    _: '··−−·−',
    '+': '.-.-.',
    '"': '.-..-.',
    '?': '..--..',
    '/': '-..-.',
}

const morseRef = Object.keys(textRef).reduce(
  (obj, char) => ({ ...obj, [textRef[char]]: char }),
  {}
);

function textToMorse(str) {
    return [...str.toLowerCase()].map((letter) => textRef[letter]).join(' ');
}

function morseToText(str) {
    return str.split(' ').map((morse) => morseRef[morse]).join('');
}


const text = document.querySelector('.text')
const morsecode = document.querySelector('.morsecode')


document.querySelector('.clearButton').addEventListener('click', () => {
    text.value = '';
    morsecode.value = '';
})

text.addEventListener('keyup', () => {
    outputMorse()
})

morsecode.addEventListener('keyup', () => {
    outputText()
})



function outputMorse() {
    morsecode.value = textToMorse(text.value)
}

function outputText() {
    text.value = morseToText(morsecode.value)
}
