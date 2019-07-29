const path = require('path');

//Gets entire path of base file name
console.log(__filename);

// Just gets file name
console.log(path.basename(__filename));

// Just gets the directory name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

//Create path object
console.log(path.parse(__filename));

// Get a specific key value from the path object with dot notation
console.log(path.parse(__filename).base);

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));