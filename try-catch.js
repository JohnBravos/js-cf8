// const products = []

// function insertProduct(arr, product) {
//     if (!arr || !product) return

//     try {
//         if (arr.includes(product)) {
//             throw new Error("Product exists")
//         }
//         products.push(product)
//     } catch (error) {
//         console.error(error.message, error.trace)
//         throw error
//     }
// }

// try {
//     insertProduct(products, "Apples")
//     console.log(products)
//     insertProduct(products, "Apples")
// } catch (error) {
//     console.log(error.message)
// }

// Constructors

class ProductAlreadyExistsError extends Error {
    constructor(message) {
        super(message)
        this.code = "ProductExists"
    }
}

class ProductNotFoundError extends Error {
    constructor(message) {
        super(message)
        this.code = "Product not found"
    }
}

try {
    throw new ProductNotFoundError("Product not found!")
} catch (error) {
    if (error instanceof ProductNotFoundError) {    // Αυτό θα εκτυπωθεί
        console.error("Product not exists. \n" + error.message, error.code)
    } else if (error instanceof ProductAlreadyExistsError) {
        console.log("Product already exists.\n" + error.message, error.code)
    }
}

/////////////////////

class ProductError extends Error {
    #count = 0;

    constructor(message) {
        super(message)
        this.code = "ProductError"
    }
}

class InvalidProductError extends Error {

    constructor(message) {
        super(message)
        this.code = 'InvalidProductError'
    }
}

class DuplicateProductError extends Error {

    constructor(message) {
        super(message)
        this.code = 'DuplicateProductError'
    }
}

function insert(arr, product) {
    try {
        if (!product || typeof product !== 'object') {
            throw new InvalidProductError('Invalid Product')
        }

        if (arr.some(p => p.id === product.id)) {
            throw new DuplicateProductError(`Product with id=${product.id} already exists`)
        }

        arr.push(product)
            console.log(`Product inserted: ${JSON.stringify(product)}`)
    } catch (error) {
        console.log(`${new Date().toLocaleString()}. Error inserting product: ${error.message}`)
        throw error;
    }
}

const products = []

try {
    insert(products, {id: 1, title: 'Laptop', price: 1000});
    insert(products, {id: 2, title: 'Smartphone', price: 500});
} catch (error) {
    if (error  instanceof InvalidProductError) {
        console.log(`Error: ${error.message}`)
    } else if (error instanceof(DuplicateProductError)) {
        console.log(`Error: ${error.message}`)
    } else {
        console.log(`Unexpected Error. ${error.message}`)
    }
}