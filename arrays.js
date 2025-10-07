const arr1 = []
const arr2 = [1, 2, 3, 4, 5]
const arr3 = new Array(5).fill(0)

const arr = [...arr2]

// Array methods
console.log(arr2.length)
console.log(arr2[0])
console.log(arr2[arr.length - 1])

// Joins an array with a delimeter and returns a string
console.log(arr2.join(','))             // επιστρέφει string 

// Traverse
// classic for
// for (let i = 0; i < arr2.length; i++) {
//     console.log(arr2[i])
// }

// Enhanced for with for ... of
for (let item of arr2) {
    console.log(arr2[item])
}

// Functional way, not iterative (είναι μέθοδος, μέσα υποκρύπτεται η for)
arr2.forEach((val, index) => {
    console.log(`Value: ${val}, index: ${index}`)
})

// Stack-like Operations - LIFO
// arr.push(12)
// let popped = arr.pop()
// console.log(popped)

// Queue-like operations - FIFO
//  arr.shift()     // returns the first el
// let shifted = arr.shift()
// console.log(shifted)

// Add to first position
// arr.unshift(5)

// Slice
// const sliced1 = arr.slice(1)
// const sliced2 = arr.slice(1, 3)     // startIndex έως endIndex - 1
// const sliced3 = arr.slice()         // shallow copy

// console.log(sliced1)
// console.log(sliced2)
// console.log(sliced3)

// let spliced = arr.slice().splice(2, 1)      // returns new array
// console.log(spliced)

// Splice delete, insert, update
// arr.splice(2, 1)        // index 2, removes 1 element
// arr.splice(2, 0, 3)     // insert 3 at index 2
// arr.splice(2, 2, 1, 5)  // at index 2 removes 2 el, and inserts 1 & 5, updating

// let spliced = arr.slice().splice(2, 1)      // returns new array

// Array includes
if (arr.includes(3)) {
    console.log('3 is included')
} else {
    console.log('not included')
}

// indexOf & lastIndexOf
const index = arr.indexOf(5, 2);    // Η θέση του "5" ξεκινώντας από την θέση 2 του πίνακα.

// concat
let myConcat  = arr.concat(arr3)

// spread operator
let myConcat2 = [...arr, ...arr3]


// min value of an array
let minVal = Math.min(...arr)
console.log(minVal)

let minIndex = arr.indexOf(minVal)
console.log(minIndex)

// Destructuring

let grid = [1, 2]
let [x, y] = grid       // x -> 1, y -> 2

let [first, second, ...rest] = arr;         // rest operator

function min(...arr) {              // rest operator
    return Math.min(...arr)         // spread operator
}

let minEl = min(1, 2, 3, 4)
console.log(minEl)