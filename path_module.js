const path = require('path');

// console.log(`mypath${path.sep}`)


filepath = path.join(`content`, 'subfolder', 'another.txt')

const basename = path.basename(filepath)
// console.log(basename)

const fullPath = path.resolve(filepath)
// console.log(fullPath)

const dirPath = path.resolve(__dirname)
// console.log(dirPath)

const absolute = path.resolve(__dirname, filepath)
console.log(absolute)


anotherFullPath = `${dirPath}${path.sep}${filepath}`
console.log(anotherFullPath)

const test = anotherFullPath == fullPath
console.log(test)