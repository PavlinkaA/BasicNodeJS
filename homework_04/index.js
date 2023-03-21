import http from "http";

const server = http.createServer((request, response) => {

    const url = request.url;
    const method = request.method;


    if (url === "/") {
        response.setHeader("Content-Type", "text/html");
        response.write("<h1>Hello, this is our first http homework.</h1>");
        response.end();
    };
    if (url === "/student") {
        response.setHeader("Content-Type", "text/html");
        response.write("<h1>-Student name: `Pavlinka`; <br> -Student lastname: `Atanasova`;  <br>-Academy: `SEDC`; <br> -Subject: `BasicNodeJS`;</h1>");
        response.end();
    };



})

server.listen(3000, () => {
    console.log("Server is up and running...")
});


