add = (a, b) => {
    return a + b
}
minus = (a, b) => {
    return a - b
}
multiple = (a, b) => {
    return a * b
}
divided = (a, b) => {
    return a/b;    
}
mod = (a, b) => {
    return a % b
}

const Calculator = { add, minus, multiple, divided,mod }
module.exports = Calculator