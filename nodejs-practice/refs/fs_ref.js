// File System Module Nodejs
const fs = require('fs');
const path = require('path');

//Create Dir
fs.mkdir(path.join(__dirname, 'notes'), (err) => {
  if (err) throw err;

  console.log('Folder was created');
});

//Create file
fs.writeFile(
  path.join(__dirname, 'notes', 'myNotes.txt'),
  'Hello world',
  (err) => {
    if (err) throw err;
    console.log('Файл был создан');

    //Update existing file
    fs.appendFile(
      path.join(__dirname, 'notes', 'myNotes.txt'),
      ' From append file',
      (err) => {
        if (err) throw err;
        console.log('File has been changed');

        //Read file, through buffer or 'UTF-8' format
        fs.readFile(
          path.join(__dirname, 'notes', 'myNotes.txt'),
          'utf-8',
          (err, data) => {
            if (err) throw err;
            console.log(Buffer.from(data).toString()); //or 'utf-8';
          }
        );
      }
    );
  }
);

//Rename file
fs.rename(
  path.join(__dirname, 'notes', 'myNotes.txt'),
  path.join(__dirname, 'notes', 'notes.txt'),
  (err) => {
    if (err) throw err;

    console.log('File renamed');
  }
);
