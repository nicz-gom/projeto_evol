import Colors  from "../../styles/colors";
import Fonts from "../../styles/fonts";

interface InputsProps{
    label: string;
    input: string;
    placeholder: string;
}

/*Criando um componente de input genérico*/
function Inputs({label, input, placeholder}: InputsProps){
    return (
        <div style={{margin: '2px'}}>
            <label style={{display: 'flex', alignItems: 'start', color: Colors.White, fontSize: Fonts.medio, paddingLeft: '45px'}}>{label}</label>
            <input type={input} placeholder={placeholder} style={{backgroundColor: 'white', border: 'none', borderRadius: '5px', height: '25px', width: '80%', color: 'black', fontSize: Fonts.pequeno, paddingLeft: '5px'}} />
        </div>
    );
}

export default Inputs;