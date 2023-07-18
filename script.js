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


export {capitalize, reverseString };