const fs = require("fs");
const request = require("request");
const args = process.argv.slice(2);

const makingFetchHappen = (args) => {
  fs.writeFile(`${args[1]}`, `${args[0]}`, 'utf8', (err, data) => {
    if (err) {
      console.log("ERROR: ", err)
    }
    else {
    }
  })
  // request(`${args[0]}`, (error, response, body) => {
  //   console.log('error:', error)
  //   console.log('statusCode:', response && response.statusCode);
  //   console.log('body:', body);
  // })

  console.log(`${args[0]} ${args[1]}`)
}

makingFetchHappen(args)