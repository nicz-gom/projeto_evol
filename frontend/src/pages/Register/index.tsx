import Colors from "../../styles/colors";
import Inputs from "../../components/Inputs";
import Fonts from "../../styles/fonts";
import Button from "../../components/Buttons";
import Icon from "@mui/material/Icon";
import Footer from "../../components/footer";

import "./style.css";

import { Link } from "react-router-dom";

function Register(){
    return (
        <div style={{height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div className="BlackCircle shape-1" aria-hidden="true"><Icon className="icon-work" style={{color: Colors.Info}}>work</Icon></div>
            <div className="BlackCircle shape-2" aria-hidden="true"><Icon className="icon-hand" style={{color: Colors.SkinColor}}>waving_hand</Icon></div>
            <div className="BlackCircle shape-3" aria-hidden="true"><Icon className="icon-analytics" style={{color: Colors.Warning}}>analytics</Icon></div>

            <form style={{height: '450px', width: '40%', backgroundColor: Colors.Black, padding: '30px, 30px, 30px, 30px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: '20px', position: 'relative', left: '-250px', top: '50px'}}>
                <section style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                    <span style={{backgroundColor: Colors.White, width: '100%', height: '2px', marginLeft: '35px', marginRight: '15px'}}></span>
                    <h1>Evol</h1>
                    <span style={{backgroundColor: Colors.White, width: '100%', height: '2px', marginRight: '35px', marginLeft: '15px'}}></span>
                </section>
                <section style={{ width: '100%', display: 'flex', flexDirection: 'column'}}>
                    <Inputs label="Email:" input="text" placeholder="Digite seu email" required />
                    <Inputs label="Nome:" input="text" placeholder="Digite seu nome" required />
                    <Inputs label="Senha:" input="password" placeholder="Digite sua senha" required />
                    <Inputs label="Confirmar senha:" input="password" placeholder="Confirme sua senha" required />
                </section>
                <Button text="Cadastrar-se" onClick={() => alert('Cadastro realizado com sucesso!')} />
                <span style={{color: Colors.White, fontSize: Fonts.pequeno}}>Já possui uma conta? <Link to="/login" style={{color: Colors.Info, textDecoration: 'underline'}}>Entrar</Link></span>
            </form>
            <Footer />
        </div>
    );    
}

export default Register;