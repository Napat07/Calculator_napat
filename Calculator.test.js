const Calculator = require('./Calculator.js')

test('6 add 7 Equal 13', () => {
    const number1 = 6
    const number2 = 7
    const result = Calculator.add(number1, number2)
    expect(result).toBe(13)
})
test('7 minus 5 Equal 2', () => {
    const number1 = 7
    const number2 = 5
    const result = Calculator.minus(number1, number2)
    expect(result).toBe(2)
})
test('4 multiple 2 Equal 8', () => {
    const number1 = 4
    const number2 = 2
    const result = Calculator.multiple(number1, number2)
    expect(result).toBe(8)
})
test('18 divided 9 Equal 2', () => {
    const number1 = 18
    const number2 = 9
    const result = Calculator.divided(number1, number2)
    expect(result).toBe(2)
})
test('15 mod 7 Equal 1', () => {
    const number1 = 15
    const number2 = 7
    const result = Calculator.mod(number1, number2)
    expect(result).toBe(1)
})