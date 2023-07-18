import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./script";

// capitalize()
test('Capitalized', () => {
    expect(capitalize('linkoln')).toBe('Linkoln');
})

test('Capitalized (Match)', () => {
    expect(capitalize('linkoln')).toMatch(/\b[A-Z][a-zA-Z]*\b/);
})

// reverseString()
test('Reverse the string', () => {
    expect(reverseString('data')).toBe('atad');
})

// calculator object
test('Addition works', () => {
    expect(calculator.add(2,1)).toBe(3);
})

test('Subtraction works', () => {
    expect(calculator.subtract(2,1)).toBe(1);
})

test('Division works', () => {
    expect(calculator.divide(6,3)).toBeCloseTo(2);
})

test('Multiplication works as well!', () => {
    expect(calculator.multiply(3,2)).toEqual(6);
})

// caesarCipher()
test('Works with normal words', () => {
    expect(caesarCipher('attack', 1)).toBe('buubdl');
})

test('Shifts from z to a', () => {
    expect(caesarCipher('zebras', 1)).toBe('afcsbt');
})

test('Keeps the same case', () => {
    expect(caesarCipher('Titus', 3)).toBe('Wlwxv')
})

test('Keeps the punctuation', () => {
    expect(caesarCipher('Did I lock the gate?', 1)).toBe('Eje J mpdl uif hbuf?');
})

// analyzeArray()
test('Returns an object with properties', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({ average: 4, min: 1, max: 8, length: 6 });
})