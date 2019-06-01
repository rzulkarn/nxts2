//
// NXT Agent HTTP2 Version
//
const http2 = require('http2');
const fs = require('fs');


const options = {
  key: fs.readFileSync('./server-key.pem'),
  cert: fs.readFileSync('./server-crt.pem'),
  allowHTTP1: true
};

const server = http2.createSecureServer(options);
server.on('connect', (req, res) => {
   console.log('connect');
});
server.on('stream', (stream, requestHeaders) => {
  stream.respond({ ':status': 200,
                    'message': 'hello http2' }); 
  stream.end('fin');
});
server.listen(8080);
console.log('HTTP2 listening to port 8080');
