const capitalize = (string) => {
    let result = string[0].toUpperCase() + string.slice(1);
    return result;
}

const reverseString = (string) => {
    let reversedWord = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reversedWord += string[i];
    }
    return reversedWord;
}


const calculator = {
    add: function(a,b) {
        return a + b;
    },
    subtract: function(a,b) {
        return a - b;
    },
    divide: function(a,b) {
        return a / b;
    },
    multiply: function(a,b) {
        return a * b;
    }
}

const shiftZtoA = (encryptedLetter, shiftFactor, alphabet, index) => {
    let newFactor = 0;
    while(encryptedLetter === undefined) {
        let tempFactor = shiftFactor - 1;
        encryptedLetter = alphabet[index + tempFactor];
        newFactor++;
    }
    return encryptedLetter = alphabet[newFactor - 1];
}

const caesarCipher = (string, shiftFactor) => {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const capAlphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let encryptedString = '';
    
    for(let i = 0; i < string.length; i++) {
        // keep punctuation
        if (/[^a-zA-Z]/.test(string[i])) {
            encryptedString += string[i];
            continue;
        }

        let index = alphabet.indexOf(string[i]);

        // keep capitalized letters
        if (index === -1) {
            let capIndex = capAlphabet.indexOf(string[i]);
            let encryptedLetter = capAlphabet[capIndex + shiftFactor];
            // shift from z to a
            if (encryptedLetter === undefined) {
                encryptedLetter = shiftZtoA(encryptedLetter, shiftFactor, capAlphabet, index);
            }
            encryptedString += encryptedLetter;
            continue;
        }

        let encryptedLetter = alphabet[index + shiftFactor];
        // shift from z to a
        if (encryptedLetter === undefined) {
            encryptedLetter = shiftZtoA(encryptedLetter, shiftFactor, alphabet, index);
        }

        encryptedString += encryptedLetter;
    }
    
    return encryptedString;
}

const analyzeArray = (numArr) => {
    let sum = numArr.reduce((total, num) => {
        return total + num;
    }, 0);
    let sortedArr = numArr.sort((a,b) => a - b);

    let average = sum / numArr.length;
    let min = sortedArr[0];
    let max = sortedArr[sortedArr.length - 1];
    let length = numArr.length;

    return {average, min, max, length};
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };