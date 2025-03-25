const os = require('os')

//EOL means end of line 
// const data  = 'this is node js'+ os.EOL +'this the programming language'
// console.log(data)

//NO OF logical CPU cores available
// const availablecores = os.availableParallelism()
// console.log(availablecores)

//you are working with which CPU Architecture of operating system platform
// const architecture = os.arch()
// console.log(architecture)

//Information about the available logical Cpu cores in the system. It returns array of objects. Each object represents logical cpu core and their details
// const cpussystem = os.cpus()
// console.log(cpussystem)

//
// const devNullSystem = 'hello'+ os.devNull +'India'
// console.log(devNullSystem)

//endianness means which datatypes are arranged in memory
// const EndiannessOrder = os.endianness()
// console.log(EndiannessOrder)


// free system memory in bytes
// const freememory = os.freemem()
// console.log(freememory)


//current user's home directory
const homedirectory = os.homedir()
console.log(homedirectory)

// host name of the operating system in string
const hostnamedata = os.hostname()
console.log(hostnamedata)

//
// const loadavg = os.loadavg()
// console.log(loadavg)

//machine type as a string
// const machinedata = os.machine()
// console.log(machinedata)

//Information about the network interfaces available on current machine
const networkInterfaces = os.networkInterfaces()
console.log(networkInterfaces)

//default directory for temporary files in string
const tempdirectory = os.tmpdir()
console.log(tempdirectory)

//type of operating system
const type = os.type()
console.log(type)

//total menmory in bytes 
const totalMemory = os.totalmem()
console.log(totalMemory)

//uptime in no of seconds
const uptime = os.uptime()
console.log(uptime)

//kernel version in string
const version = os.version()
console.log(version)