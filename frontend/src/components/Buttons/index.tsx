import Colors  from "../../styles/colors";
import "./style.css";

interface ButtonProps{
    text: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
}

function Button({text, onClick, type}: ButtonProps){
    return (
        <button onClick={onClick} type={type} style={{backgroundColor: Colors.Buttons, color: 'white', border: 'none', borderRadius: '5px', height: '30px', width: '100px', fontSize: '14px', cursor: 'pointer', margin: '15px 0'}}>
            {text}
        </button>
    );
}

export default Button;