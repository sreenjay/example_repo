const name = require("./names.js");

console.log(name)

const sayHi = (name) => {
    console.log(`Hello There ${name}`)
}

module.exports = sayHi;