/**
 * @type {Object.<string, string>}
 */
const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

/**
 * Decode letters 
 * @param {string} letters 
 * @returns {string}
 */
function decodeLetters(letters) {
    /**
     * length of word
     * @see task README.md
     * @type {number}
     */
    const lengthOfSymbols = 2;
    /**
     * for dispatching code to Morce
     * @type {Object.<string, string>}
     */
    const dispatchCodToMORSE = {
        '10': '.',
        '11': '-',
    }

    /**
     * save decoded letter
     * @type {string}
     */
    let decoded = '';

    for (let i = 0; i < letters.length; i += lengthOfSymbols) {
        const code = letters.slice(i, i + lengthOfSymbols);
        const symbol = dispatchCodToMORSE[code] ? dispatchCodToMORSE[code] : '';
        
        decoded += symbol;
    }

    return MORSE_TABLE[decoded];

}


/**
 * Decode word of giving Morce code word
 * @param {string} word 
 */
function decodeWord(word) {
    /**
     * length of word
     * @type {number}
     */
    const length = word.length;
    /**
     * @see task README.md
     * @type {number}
     */
    const lengthOfLetter = 10;

    /**
     * save decoded words
     * @type {Array{string}}
     */
    const decodedWords = [];

    for (let i = 0; i < length; i += lengthOfLetter) {
        const letter = decodeLetters(word.slice(i, i + lengthOfLetter));
        decodedWords.push(letter);
    }
    
    return decodedWords;
}

/**
 * Decode Morce code
 * @param {string} expr 
 * @returns {string}
 */
function decode(expr) {
    /**
     * split expr to words
     * @type {string}
     */
    const words = expr.split('**********');

    return words.reduce((decode, word) => {
        /**
         * @type {Array<string>}
         */
        const decodedWord = decodeWord(word);

        return `${decode} ${decodedWord.join('')}`;
        
    }, '').slice(1);// TODO modify to better solution 
}

module.exports = {
    decode
}