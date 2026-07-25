import { loginRepository } from "../Repository/LoginRepository";

export async function loginService(email: string, password: string): Promise<boolean> {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    const userExists = await loginRepository(email, password);

    if (!email || !password) {
        throw new Error("Email e senha são obrigatórios");
    }

    if (!emailRegex.test(email)) {
        throw new Error("Email inválido");
    }

    if (password.length < 6) {
        throw new Error("Senha deve conter no mínimo 6 caracteres");
    }

    if (!passwordRegex.test(password)) {
        throw new Error("Senha deve conter pelo menos uma letra e um número");
    }

    if (!userExists) {
        throw new Error("Usuário não encontrado");      
    }

    return userExists;

}