// const logger = require('./logger');

// console.log(logger);

// logger.log('message');
// console.log(logger.url);


// const path = require('path');
// var pathObj = path.parse(__filename);

// console.log(pathObj);

// const os = require('os');
// var a = os.freemem();
// var b = os.totalmem();
// console.log(a);
// console.log(b);


const fs = require('fs');

// const files = fs.readdirSync('./');

// console.log(files);
fs.readdir('./',(err,files)=>
{
    if(err) console.log('Error',err);
    else console.log('Hekki',files);
})


fs.readdir('./',)