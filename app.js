const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer(function (req, res) {
  //   fs.readFile('index.html', function (error, data) {
  //     if (error) {
  //       res.writeHead('Error: FIle not found');
  //     } else {
  //       res.write(data);
  //     }
  //     res.end();
  //   });
});

server.listen(port, function (error) {
  if (error) {
    console.log('Error', error);
  } else {
    console.log('Server is running on port ' + port);
  }
});
