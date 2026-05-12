import Colors from "../../styles/colors";
import Fonts from "../../styles/fonts";

interface ValidationMessageProps {
    message: string;
}

function ValidationMessage({ message }: ValidationMessageProps) {
    return (
        <span style={{ color: Colors.Danger, fontSize: Fonts.pequeno }}>
            {message}
        </span>
    )
}

export default ValidationMessage;
