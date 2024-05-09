const http = require("http");

http.createServer((request, response) => {
    response.end("Hello! This is the server.");
})
.listen(5000, () => {
    console.log("The server is working!");
});