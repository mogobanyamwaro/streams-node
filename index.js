const http = require("http");
const fs = require("fs");

const myReadStream = fs.createReadStream(__dirname + "/readme.md");
const myWriteStream = fs.createWriteStream(__dirname + "/writeme.md");
myReadStream.on("data", (chunk) => {
  console.log("new chunk received");
  console.log(chunk);
  myWriteStream.write(chunk);
});

// Alternituvely, we can use pipe
myReadStream.pipe(myWriteStream);
const server = http.createServer((req, res) => {
  console.log("Server is running");
  res.writeHead(200, { "Content-Type": "text/html" });
  const myReadStream = fs.createReadStream(__dirname + "/readme.md", "utf8");
  myReadStream.pipe(res);
  // res.end(`<h1>${myReadStream.pipe(res)}</h1>`);
});

server.listen(3000, "127.0.0.1", () =>
  console.log("Server is running on port 3000")
);
