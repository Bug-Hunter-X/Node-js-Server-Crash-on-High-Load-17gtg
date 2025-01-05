const http = require('http');

const requestListener = async function (req, res) {
  try {
    // Simulate some work
    await new Promise(resolve => setTimeout(resolve, 100));
    res.writeHead(200);
    res.end('Hello, World!');
  } catch (error) {
    console.error('Error handling request:', error);
    res.writeHead(500);
    res.end('Internal Server Error');
  }
};

const server = http.createServer(requestListener);

const port = 8080;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Error Handling added to prevent crashes