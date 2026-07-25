import * as http from "http";
import { loginController } from "./Modules/Login/Controller/LoginController";

const server = http.createServer((req, res) => {
    
    if (req.url ===  "/" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Servidor rodando!" }));
    }

    if (req.url === "/login" && req.method === "POST") {
        loginController(req, res);
    }
});

server.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});

