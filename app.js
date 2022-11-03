// npm - global command comes with node
// npm --version

// local dependency - use it only on a particular project
// npm i <package name>

// global dependency - use it in any project
// npm install -g <package name>

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json file in the root, create properties etc.)
// npm init (step by step, press enter to skip)
// npm inti -y (everything default)


const lo = require('lodash')

const items = [1, [2, [3, [4]]]];
const flatArray = lo.flattenDeep(items)
console.log(items)
console.log(flatArray)