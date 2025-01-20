
const fs = require('fs');
const path = require('path')

const filePath = path.join(__dirname, 'text.txt');

const readableStream = fs.createReadStream(filePath);

let data = "";

readableStream.on("data", (chunk) => {
    data += chunk;
    console.log(data.toString());
});
readableStream.on("error", (error) => console.error(error, "Error"));