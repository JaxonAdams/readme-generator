const fs = require('fs');

const writeFile = (fileContent) => {
    console.log("Writing your Readme...");

    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
    
            resolve({
                return: true,
                message: 'Readme Written!'
            });
        });
    });
};

module.exports = writeFile;