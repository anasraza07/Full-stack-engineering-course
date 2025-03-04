// Exercise 2: Play With Variables ✨

const a = 18;
const b = 24;

// add
function add() {
    return a + b;
}
console.log(add())

// subtract
function subtract() {
    if (a > b) {
        return a - b
    } else {
        return b - a
    }
}
console.log(subtract());

// multiply
function multiply() {
    return a * b;
}
console.log(multiply());

// divide
function divide() {
    if (a > b) {
        return a / b;
    } else {
        return b / a;
    }
}
console.log(divide());

// increment
function increment() {
    return a + 1;
}
console.log(increment());

// decrement
function decrement() {
    return b - 1;
}
console.log(decrement());

// remainder
function remainder() {
    if (a > b) {
        return a % b
    } else {
        return b % a
    }
}
console.log(remainder());