
// The built-in console logging:

console.time()

console.assert(false, "error message")

let title = "Animal farm"
let author = "George Orwell"

let book = {
    title: "Animal farm",
    author: "George Orwell"
}

let label = "group A"

console.log({ title, author })

console.table(book)

console.group(label)

console.dir(book)

console.count('number of button clicks')

console.timeLog()

// for debugging, e.g. nest this inside a function's body
console.trace('Who called upon me?')

console.log(
    '%c I am a 🪭 of JavaScript',
    'color: red; font-weight: bold; background-color: purple;'
)

// Other logging libraries: pino, winston
