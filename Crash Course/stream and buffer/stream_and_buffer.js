const fs = require('fs');

const readStream = fs.createReadStream('../files/docs/stream.txt', { encoding: 'utf-8' });
const writeStream = fs.createWriteStream('../files/docs/stream_write.txt');

let i = 0

// readStream.on('data', (chunk) => {
//     console.log(`---- Chunk part ${i} ----`);
//     console.log(chunk);

//     writeStream.write(`\n---- Chunk part ${i} ----\n`);
//     writeStream.write(chunk);  
//     i++;
// })

readStream.pipe(writeStream);