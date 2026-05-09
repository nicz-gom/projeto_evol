import Colors from "../../styles/colors";
import Inputs from "../../components/Inputs";
import Fonts from "../../styles/fonts";
import Button from "../../components/Buttons";

function Register(){
    return (
        <div style={{height: '350px', width: '45%', backgroundColor: Colors.Black, padding: '20px, 20px, 20px, 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: '20px', position: 'relative', left: '-250px', top: '50px'}}>
            <h1>Evol</h1>
            <section style={{ width: '100%', display: 'flex', flexDirection: 'column'}}>
                <Inputs label="Email:" input="text" placeholder="Digite seu email" />
                <Inputs label="Nome:" input="text" placeholder="Digite seu nome" />
                <Inputs label="Senha:" input="password" placeholder="Digite sua senha" />
                <Inputs label="Confirmar senha:" input="password" placeholder="Confirme sua senha" />
            </section>
            <Button text="Cadastrar-se" onClick={() => alert('Cadastro realizado com sucesso!')} />
            <text style={{color: Colors.White, fontSize: Fonts.pequeno}}>Já possui uma conta? <a href="/login" style={{color: Colors.Info, textDecoration: 'underline'}}>Entrar</a></text>
        </div>
    );    
}

export default Register;