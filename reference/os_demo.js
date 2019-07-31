const os = require('os');

// Get the Platform
console.log(os.platform());

// Get CPU architechture
console.log(os.arch());

// CPU Core Info
console.log(os.cpus());

// Free memory
console.log(os.freemem());

// Total memory
console.log(os.totalmem());

//Home Directory
console.log(os.homedir());

// Uptime
console.log(os.uptime());