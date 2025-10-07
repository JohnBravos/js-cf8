const arr = [1, 8, 5, 4]

let sorted1 = arr.sort((a, b) => a - b)     // βάζει σε σειρά από το μικρό στο μεγαλύτερο 

const arr2 = ['Νίκη', 'Ανδρέας']
arr2.sort((a, b) => a.localeCompare(b, "el"))   // αλλάζει θέσεις στα ονόματα

const users = [
    {firstname: 'Ανδρεάς', age: 25},
    {firstname: 'Νίκη', age: 20}
]

users.sort((a, b) => a.age - b.age)     // sort by age asc

// users.sort(function(a, b) {
//     if (a.age === b.age) {
//         return a.firstname.localeCompare(b.firstname, "el")
//     }
//     return a.age - b.age;
// })

// users.sort(function(a, b) {
//     if (a.firstname === b.firstname) {
//         return age - b.age
//     }
//     return a.firstname.localeCompare(b.firstname, "el")
// })

