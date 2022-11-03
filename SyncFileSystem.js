// File System Module(FS) -  Sync

// Require the functions of the module.
const {readFileSync, writeFileSync} = require('fs');
const path = require('path');

// Read a file.
console.log("Start")

const absolutePath = path.resolve(__dirname, 'content', 'subfolder', 'another.txt');
console.log(absolutePath)
const readText = readFileSync(absolutePath, 'utf-8');
console.log(readText);


// Creates a file with the user specified text inside the file.
const text = "Write me to the file.\n"
writeFileSync("content/subfolder/second_another.txt", text, {flag:'a'})
const anotherReadText = readFileSync('content/subfolder/second_another.txt', 'utf-8')
console.log(anotherReadText)



const result = `Here is the rsult : ${readText},  ${anotherReadText}`
writeFileSync("content/result.txt", result)

console.log("Finished writing")
console.log("Start new task")