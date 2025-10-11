// remove duplicates    
const arr = [1, 1, 1, 2, 2, 3, 3, 3]

function removeDuplicates(arr) {
    const unique = [];  // Δημιουργεί έναν κενό πίνακα

    for (let item of arr) { // Για κάθε στοιχείο του πίνακα arr
        if (unique.indexOf(item) === -1) unique.push(item);
        // Αν το στοιχείο δεν βρίσκεται στον πίνακα unique, πρόσθεσέ το
    }

    return unique;
}

// Array chunks
function chunkArray(arr, size) {
    const chunks = []

    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size))
    }
    return chunks
}

const arr2 = [1, 2, 3, 4, 5]
console.log(chunkArray(arr2, 4))