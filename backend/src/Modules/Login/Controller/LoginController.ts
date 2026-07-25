import { loginService } from "../Service/LoginService";

export function loginController(req: any, res: any) {
    let body = "";

    req.on("data", (chunk: Buffer | string) => {
        body += chunk.toString();
    });

    req.on("end", async () => {
        const { email, password } = JSON.parse(body);    
      
    try {
            const result = await loginService(email, password);

            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(result));
        } catch (error: any) {
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: error.message }));
        }
    });
}