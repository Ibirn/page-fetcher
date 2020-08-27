const fs = require("fs");
const request = require("request");
const args = process.argv.slice(2);

const makingFetchHappen = (args) => {
  request(`${args[0]}`, (error, response, body) => {

    if (error) {
      console.log('Error: Domain does not exist.\n', error)
      return
    }
    if(response.statusCode !== 200){
      console.log('HTTP error:', response && response.statusCode,"\nPlease double-check your URL.")
      return
    }

    fs.writeFile(`${args[1]}`, `${body}`, 'utf8', (err, data) => {
      if (err) {
        console.log("Error: Local path invalid.\n", err)
      }
      else {
        console.log(`Downloaded and saved ${body.length} bytes to ${args[1]}`)
      }
    });
  });
}
makingFetchHappen(args)