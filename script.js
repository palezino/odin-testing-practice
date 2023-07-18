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

console.log(calculator.divide(6,3));

export { capitalize, reverseString, calculator };