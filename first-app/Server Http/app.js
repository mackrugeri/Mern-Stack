const http = require('http');

const Http_server = http.createServer((req,res)=>
{
        if(req.url === './')
        {
            res.write('Hello world');
            res.end;
        }
});

Http_server.listen(3000); 
console.log('listening on port 3000....');