import Colors from "../../styles/colors";
import Inputs from "../../components/Inputs";
import Fonts from "../../styles/fonts";
import Button from "../../components/Buttons";
import Icon from "@mui/material/Icon";
import Footer from "../../components/footer";
import ValidationMessage from "../../components/validation";

import React from "react";

import ValidateEmail from "../../utils/validateEmail";
import ValidadePassword from "../../utils/validatePassword";

import "./style.css";

import { Link } from "react-router-dom";

function Login(){

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState("");

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const emailError = ValidateEmail(email);
        const passwordError = ValidadePassword(password);

        if (emailError) {
            setError(emailError);
            return;       
        }

        if (passwordError) {
            setError(passwordError);
            return;
        }

        setError("");
        alert("Login bem-sucedido!");

    }

    return (
        <div className="login-page" style={{height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <div className="BlackCircle shape-1" aria-hidden="true"><Icon className="icon-work" style={{color: Colors.Info}}>work</Icon></div>
            <div className="BlackCircle shape-2" aria-hidden="true"><Icon className="icon-books" style={{color: Colors.Danger}}>books</Icon></div>
            <div className="BlackCircle shape-3" aria-hidden="true"><Icon className="icon-analytics" style={{color: Colors.Warning}}>analytics</Icon></div>

            <form onSubmit={handleSubmit} style={{height: '350px', width: '40%', backgroundColor: Colors.Black, padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: '20px', position: 'relative', left: '-250px', top: '50px', zIndex: 2}}>
                <section style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                    <span style={{backgroundColor: Colors.White, width: '100%', height: '2px', marginLeft: '35px', marginRight: '15px'}}></span>
                    <h1>Evol</h1>
                    <span style={{backgroundColor: Colors.White, width: '100%', height: '2px', marginRight: '35px', marginLeft: '15px'}}></span>
                </section>
                <section style={{ width: '100%', display: 'flex', flexDirection: 'column'}}>
                    <Inputs label="Email:" input="text" placeholder="Digite seu email" required />
                    <Inputs label="Senha:" input="password" placeholder="Digite sua senha" required />
                </section>
                <Button text="Entrar" onClick={handleSubmit} />
                <span style={{color: Colors.White, fontSize: Fonts.pequeno}}>Não possui uma conta? <Link to="/register" style={{color: Colors.Info, textDecoration: 'underline'}}>Registrar-se</Link></span>
                <div className="validation" >
                    {error && <ValidationMessage message={error} />}
                </div>
            </form>
            <Footer />
        </div>
    );    
}

export default Login;
