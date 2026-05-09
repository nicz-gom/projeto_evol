import Colors from "../../styles/colors";
import Inputs from "../../components/Inputs";
import Fonts from "../../styles/fonts";
import Button from "../../components/Buttons";

import { Link } from "react-router-dom";

function Login(){
    return (
        <div style={{height: '350px', width: '45%', backgroundColor: Colors.Black, padding: '20px, 20px, 20px, 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: '20px', position: 'relative', left: '-250px', top: '50px'}}>
            <section style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                <span style={{backgroundColor: Colors.White, width: '100%', height: '2px', marginLeft: '35px', marginRight: '15px'}}></span>
                <h1>Evol</h1>
                <span style={{backgroundColor: Colors.White, width: '100%', height: '2px', marginRight: '35px', marginLeft: '15px'}}></span>
            </section>
            <section style={{ width: '100%', display: 'flex', flexDirection: 'column'}}>
                <Inputs label="Email:" input="text" placeholder="Digite seu email" />
                <Inputs label="Senha:" input="password" placeholder="Digite sua senha" />
            </section>
            <Button text="Entrar" onClick={() => alert('Login realizado com sucesso!')} />
            <span style={{color: Colors.White, fontSize: Fonts.pequeno}}>Não possui uma conta? <Link to="/register" style={{color: Colors.Info, textDecoration: 'underline'}}>Registrar-se</Link></span>
        </div>
    );    
}

export default Login;