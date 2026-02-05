//Operation System Module Node
const os = require('os');

// Platform
console.log(os.platform());

// Architecture
console.log(os.arch());

// CPU info breakdown
console.log(os.cpus());

// Free Memory
console.log(os.freemem());

// Total Memory
console.log(os.totalmem());

// Root Directory
console.log(os.homedir());

// Current Uptime
console.log(os.uptime());
