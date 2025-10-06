// uses this, return this
function Person(name) {
    this.name = name
}

const person = new Person('Alice')
// console.log(person)

function Counter() {
    this.count = 0 // public by default 

    this.increment = function() {
        this.count++
    }

    this.getCount = function () {
        return this.count;
    }
}

const counter  = new Counter()
counter.increment()
counter.increment()
// console.log(counter.getCount())

function Book(title, author, year) {
    this.title = title
    this.author = author
    this.year = year
    this.getInfo = function() {
        return `${this.title} by ${this.author}, ${this.year}`
    }
}

const Book1 = new Book("Java", "Androutsos", "2025")
// console.log(Book1.getInfo())

class BookClass {
    constructor(title, author, year) {
        this.title = title
        this.author = author
        this.year = year
        this.getInfo = function () {
            return `${this.title} by ${this.author}, ${this.year}`
        }
    }
}

const book2 = new BookClass("C#", "Androutsos", "2025")
console.log(book2.getInfo())

class BookPrivate {
    #title;
    #author;
    #year;

    constructor(title, author, year) {
        this.#title = title
        this.#author = author
        this.#year = year
    }

    getInfo() {
        return `${this.#title} by ${this.#author} , ${this.#year}`
    }
}

const book3 = new BookPrivate('DBs', 'Kapetis', '2025')
console.log(book3.getInfo())