import * as http from "http";

const server = http.createServer((req, res) => {
    if (req.url ===  "/" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Servidor rodando!" }));
    }
});

server.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});

