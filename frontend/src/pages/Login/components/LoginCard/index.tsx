interface InputsProps{
    label: string;
    input: string;
}

function Inputs({label, input}: InputsProps){
    return (
        <div>
            <label>{label}</label>
            <input type={input} />
        </div>
    );
}

export default Inputs;