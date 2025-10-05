// keyword function
function sayHello(name) {
    return `Hello ${name}`
}
console.log(sayHello("John"));

// function expression
const add = function(a, b) {
    return a + b
}
console.log(add(3,4));

// Arrow function 
const mul = (a, b) => a * b;
console.log(mul(5, 4));

function createDate(day = 1, month = 1, year = 2025) {
    return `${day}/${month}/${year}`
}
console.log(createDate())
console.log(createDate(16, 10, 1999))

// Rest

function max(...arr) {
    let maxVal = -Infinity

    for (let n of arr) {
        if (n > maxVal) maxVal = n
    }
    return maxVal
}
const mx = max(1, 2, 3, 4, 5)
console.log(mx)