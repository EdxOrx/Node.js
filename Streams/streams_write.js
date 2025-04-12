const { createWriteStream, readFile } = require('fs');

//Using the huge string in the file ThePrince_NiccoloMachiavelli.txt
readFile('./ThePrince_NiccoloMachiavelli.txt', 'utf8', (error, data) => {
    if (error) {
      throw error;
    } else {
        //the param is the name of the new file to save  
        const fileWriteStream = createWriteStream('./streams_write.txt');

        fileWriteStream.write(data);
    }
});
