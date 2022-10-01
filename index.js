const http = require("http");
const fs = require("fs");

const myReadStream = fs.createReadStream(__dirname + "/readme.md");
const myWriteStream = fs.createWriteStream(__dirname + "/writeme.md");
myReadStream.on("data", (chunk) => {
  console.log("new chunk received");
  console.log(chunk);
  myWriteStream.write(chunk);
});

const server = http.createServer((req, res) => {
  console.log("Server is running");
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`<h1>Hello World</h1>`);
});

server.listen(3000, "127.0.0.1", () =>
  console.log("Server is running on port 3000")
);
