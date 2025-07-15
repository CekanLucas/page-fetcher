// node fetcher.js http://www.google.com/ ./index.html
// Downloaded and saved 3261 bytes to ./index.html

// Use the request library to make the HTTP request
// Use Node's fs module to write the file
// Use the callback based approach we've been learning so far
// Do not use the pipe function
// Do not use synchronous functions (see warning below)
const fs = require('fs');
const request = require('request');
const args = process.argv.slice(2);
const url = args[0];
const path = args[1];

const pageFetch = (URL, PATH) => {

  const append = (resource, filepath) => {
    fs.appendFile(filepath, `${resource}`, (err) => {
      if (err) throw err;
      console.log('file created');
      fs.stat(PATH, //try to call this after append
        (err, stats)=>{
          console.log(`Downloaded and saved ${stats.size} bytes to ${PATH}`);
        });
    });
  };
  
  request(URL, (error, request, body) => {
    
    fs.access(PATH, err => {
      console.log(`${PATH} ${err ? 'does not exist' : 'exists'}`);
      if (err) { // if file doesnt exist
        append(`${body}\n`, PATH);
      } else { // if file exist
        fs.unlink(PATH, (err) => {
          if (err) throw err;
          console.log(`${PATH} was deleted`);
          append(`${body}\n`, PATH);
        });
      }
    });
  });
};
pageFetch(url, path);