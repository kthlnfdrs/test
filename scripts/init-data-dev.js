const path = require('path');
const fs = require('fs');

const dataStoragePath = path.resolve('data-storage.json');

const fileExists = fs.existsSync(dataStoragePath);

if (!fileExists) {
  const initialContent = JSON.stringify({ topics: [] });
  fs.writeFile(dataStoragePath, initialContent, function(err) {
    if (err) {
      console.log('Error!');
      console.log(err);
    } else {
      console.log('Created data file.');
    }
  });
} else {
  console.log('Data file exista already. Did not create it again.')
}
