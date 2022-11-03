// GLOBALS - NO WINDOW

// __dirname - PATH to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module
// process - info about the environment


// Modules
// Every file in Node is a module (by default)

// Info about user
const os = require('os');
user = os.userInfo();
console.log(user);

// Informs you on system uptime in seconds
console.log(`OS uptime is ${os.uptime()} seconds`);


const currentOS = {
    name : os.type(),
    release : os.release(),
    totalMemory : os.totalmem(),
    uptime : os.uptime(),
    freeMomory : os.freemem()
}

console.log(currentOS)






