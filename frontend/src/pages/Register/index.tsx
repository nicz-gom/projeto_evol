import Colors from "../../styles/colors";
import Inputs from "../../components/Inputs";
import Fonts from "../../styles/fonts";
import Button from "../../components/Buttons";

import { Link } from "react-router-dom";

function Register(){
    return (
        <div style={{height: '450px', width: '45%', backgroundColor: Colors.Black, padding: '30px, 30px, 30px, 30px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: '20px', position: 'relative', left: '-250px', top: '50px'}}>
            <section style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                <span style={{backgroundColor: Colors.White, width: '100%', height: '2px', marginLeft: '35px', marginRight: '15px'}}></span>
                <h1>Evol</h1>
                <span style={{backgroundColor: Colors.White, width: '100%', height: '2px', marginRight: '35px', marginLeft: '15px'}}></span>
            </section>
            <section style={{ width: '100%', display: 'flex', flexDirection: 'column'}}>
                <Inputs label="Email:" input="text" placeholder="Digite seu email" />
                <Inputs label="Nome:" input="text" placeholder="Digite seu nome" />
                <Inputs label="Senha:" input="password" placeholder="Digite sua senha" />
                <Inputs label="Confirmar senha:" input="password" placeholder="Confirme sua senha" />
            </section>
            <Button text="Cadastrar-se" onClick={() => alert('Cadastro realizado com sucesso!')} />
            <span style={{color: Colors.White, fontSize: Fonts.pequeno}}>Já possui uma conta? <Link to="/login" style={{color: Colors.Info, textDecoration: 'underline'}}>Entrar</Link></span>
        </div>
    );    
}

export default Register;