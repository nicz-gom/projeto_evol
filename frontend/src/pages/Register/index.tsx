import Colors from "../../styles/colors";
import Inputs from "../../components/Inputs";
import Fonts from "../../styles/fonts";
import Button from "../../components/Buttons";
import Icon from "@mui/material/Icon";
import Footer from "../../components/footer";
import ValidationMessage from "../../components/validation";
import Alert from "../../components/Alert";

import React from "react";

import "./style.css";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Register(){

    const navigate = useNavigate();
    const [email, setEmail] = React.useState("");  
    const [name, setName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [error, setError] = React.useState("");
    const [showAlert, setShowAlert] = React.useState(false);

    function validateEmail(): string {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
            return "Email é obrigatório";
        }
        
        if (!emailRegex.test(email)) {
            return "Email inválido";
        }

        return "";
    }

    function validateName(): string {
        if (!name) {
            return "Nome é obrigatório";
        }

        if (name.length < 4) {
            return "Nome deve conter no mínimo 4 caracteres";
        }

        return "";
    }

    function validatePassword(): string {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

        if (!password) {
            return "Senha é obrigatória";
        }   
        
        if (password.length < 6) {
            return "Senha deve conter no mínimo 6 caracteres";
        }

        if (!passwordRegex.test(password)) {
            return "Senha deve conter pelo menos uma letra e um número";
        }       

        return "";
    }

    function validateConfirmPassword(): string {
     
        if (!confirmPassword) {
            return "Confirmar senha é obrigatória";
        }   

        if (confirmPassword !== password) {
            return "Ao Confirmar senha ambas não coincidem";
        }
        
        return "";
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const emailError = validateEmail();
        const nameError = validateName();
        const passwordError = validatePassword();
        const confirmPasswordError = validateConfirmPassword();
 
        if (emailError !== "" || nameError !== "" || passwordError !== "" || confirmPasswordError !== "") {
            setError(emailError || nameError || passwordError || confirmPasswordError);
            return;
        }   
 
        setError("");
        setShowAlert(true);

        setTimeout(() => {
            navigate("../login/index.tsx");
        }, 1000);

    }


    return (
        <div style={{height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            {showAlert && <Alert message="Cadastro realizado com sucesso!" type="success" duration={3000} onClose={() => setShowAlert(false)} />}
                
            <div className="BlackCircle shape-1" aria-hidden="true"><Icon className="icon-work" style={{color: Colors.Info}}>work</Icon></div>
            <div className="BlackCircle shape-2" aria-hidden="true"><Icon className="icon-hand" style={{color: Colors.SkinColor}}>waving_hand</Icon></div>
            <div className="BlackCircle shape-3" aria-hidden="true"><Icon className="icon-analytics" style={{color: Colors.Warning}}>analytics</Icon></div>

            <form noValidate onSubmit={handleSubmit} style={{height: '450px', width: '40%', backgroundColor: Colors.Black, padding: '30px, 30px, 30px, 30px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: '20px', position: 'relative', left: '-250px', top: '50px'}}>
                <section style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                    <span style={{backgroundColor: Colors.White, width: '100%', height: '2px', marginLeft: '35px', marginRight: '15px'}}></span>
                    <h1>Evol</h1>
                    <span style={{backgroundColor: Colors.White, width: '100%', height: '2px', marginRight: '35px', marginLeft: '15px'}}></span>
                </section>
                <section style={{ width: '100%', display: 'flex', flexDirection: 'column'}}>
                    <Inputs 
                        label="Email:" 
                        input="text" 
                        placeholder="Digite seu email" 
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required 
                        hasError={Boolean(error && error.includes("Email"))}
                        />
                    <Inputs 
                        label="Nome:" 
                        input="text" 
                        placeholder="Digite seu nome" 
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required 
                        hasError={Boolean(error && error.includes("Nome"))}
                        />                    
                    <Inputs 
                        label="Senha:" 
                        input="password" 
                        placeholder="Digite sua senha" 
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required 
                        hasError={Boolean(error && error.includes("Senha"))}
                        />
                    <Inputs 
                        label="Confirmar senha:" 
                        input="password" 
                        placeholder="Confirme sua senha" 
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                        required 
                        hasError={Boolean(error && error.includes("Confirmar senha"))}
                        />                        
                </section>
                <Button text="Cadastrar-se" type="submit"/>
                <span style={{color: Colors.White, fontSize: Fonts.pequeno}}>Já possui uma conta? <Link to="/login" style={{color: Colors.Info, textDecoration: 'underline'}}>Entrar</Link></span>
                <div className="validation" style={{height: "20px", display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}> 
                    {error && <ValidationMessage message={error} />}
                </div>
            </form>
            <Footer />
        </div>
    );    

}

export default Register;