const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  //funzione createServer torna un oggetto di tipo http.server che come paramentro prende una callback,
  //la callback sarà invocata ogni vola che il server riceverà una richiesta
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('This is my first serverino tenerino\n');

  console.log(res)

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

