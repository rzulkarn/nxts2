//
// NXT Agent HTTP2 Version
//
const http2 = require('http2');
const fs = require('fs');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var client = http2.connect('https://localhost:8080', {
    ca: fs.readFileSync('./ca-crt.pem'),
});

console.log('AFTER HTTP2.CONNECT');