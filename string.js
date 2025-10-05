let str = "Coding Factory";   // το τυπώνει με τελίτσες
console.log(...str)

//parse
// let s1 = str.substring(1, 5)    // odin
// let s2 = str.slice(1, 5)    // odin
// let s3 = str.slice(-5)      // ctory

// console.log(s1 + " " + s2 + " " + s3)

// split
// let tokens = str.split(/\s+/)   // ['Coding', 'Factory']
// console.log(tokens)

// strins are char arrays
// console.log(str.charAt(0))    // C

// let index = str.indexOf('o')    // 1
// if(index !== -1) {
//   console.log(`Index found at positon ${index}`)
// } else {
//   console.log("Index not found")
// }

// let index2 = str.lastIndexOf('o');    // 11
// console.log(index2);

// Equality
let str1 = "Athens";
let str2 = "ATHENS";
// if (str1 === str2) {
//   console.log("equals")
// } else {
//   console.log("not equals")
// }

// case insensitive 
// if (str1.toUpperCase === str2.toUpperCase) {
//   console.log("equals");
// } else {
//   console.log("not equals")
// }

// trim 
let aString = "   Coding ";
let trimmed = aString.trim();
// console.log(trimmed)

// concat με + ή με .concat
// let concated = str1 + str2 + aString;
// console.log(concated)
// let conc1 = str1.concat(str2).concat(aString)
// console.log(conc1)

// RegEx

// Validation
let strInput = "Hello All";     // το i αγνοεί το case, είναι ignore case
// if(/hello/i.test(strInput)) {
//   console.log("Match found!")
// } else {
//   console.log("Match not found")
// }

// g είναι global flag δηλ. ελέγχει όλο το string για matches
// Και η matches επιστρέφει όλα τα matches σε πίνακα 
let manyTokens = 'world watch hello';
const regex = /w\w+/g
let matches = manyTokens.match(regex)
console.log(matches)

// g is global flag δηλ. ελέγχει όλο το string για matches
// και η exec επιστρέφει ένα ένα τα maches
// let match
// while ( (match == regex.exec(manyTokens)) !== null ) {
//   console.log(`Found ${match}`)
// }

function isStrongPassword(password) {
    return /(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[\W_])^.{8,}$/.test(password)
}

console.log(isStrongPassword(2559))