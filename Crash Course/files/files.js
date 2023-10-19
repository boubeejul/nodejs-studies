const fs = require('fs');

// Reading files
fs.readFile('./docs/text.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
  
  // Writing files
  // will replace the contents of the file if it does already exist
  const content = 'Teste teste teste';
  
  fs.writeFile('./docs/text.txt', content, err => {
    if (err) {
      console.error(err);
    }
  });
  
  // append at the end of the file
  const content2 = 'Teste123';
  
  fs.appendFile('./docs/text.txt', content2, err => {
    if (err) {
      console.error(err);
    }
  });