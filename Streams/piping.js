const fs = require('fs');

// Read a file
fs.createReadStream('ThePrince_NiccoloMachiavelli.txt') 
// Print in the console
    .pipe(process.stdout);