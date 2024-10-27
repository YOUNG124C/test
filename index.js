const http = require("http");
const fs = require("fs").promises;
const url = require("url");

const server = http
.createServer(async (req, res) => {
const parsedUrl = url.parse(req.url, true);
if (parsedUrl.pathname === "/add") {
const { num1, num2 } = parsedUrl.query;
const n1 = parseFloat(num1);
const n2 = parseFloat(num2);

```
  if (isNaN(n1) || isNaN(n2)) {
    res.writeHead(400, { "Content-Type": "text/html" });
    res.end("<h1>Invalid numbers provided</h1>");
  } else {
    const result = n1 + n2;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<h1>Result: ${result}</h1>`);
  }
} else {
  try {
    const data = await fs.readFile("./index.html");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  } catch (err) {
    console.error(err);
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Internal Server Error");
  }
}

```

}})
.listen(5000, () => {
console.log("Server is listening on port 5000");
});