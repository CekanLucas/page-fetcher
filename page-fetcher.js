// > node fetcher.js http://www.example.com/ ./index.html
// Downloaded and saved 3261 bytes to ./index.html

// Use the request library to make the HTTP request
// Use Node's fs module to write the file
// Use the callback based approach we've been learning so far
// Do not use the pipe function
// Do not use synchronous functions (see warning below)
const fs = require('fs');
const request = require('request');
const fileObj = request('http://example.com', (error, response, body) => {
  const f_error = ('error:', error); // Print the error if one occurred
  const f_statusCode = ('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  const f_body = ('body:', body); // Print the HTML for the Google homepage.
  return {
    f_error,
    f_statusCode,
    f_body 
  }
  
});


console.log(fileObj)


// console.log(fs)