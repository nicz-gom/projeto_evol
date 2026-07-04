import Colors from "../../styles/colors";
import Fonts from "../../styles/fonts";
import React from "react";

import "./style.css";

interface AlertProps {
    message: string;
    type: 'success' | 'error' | 'warning' | 'info';
    duration?: number; // Duração em milissegundos (opcional)
    onClose?: () => void; // Função de callback para fechar o alerta (opcional)
}

function Alert({ message, type, duration, onClose }: AlertProps) {
    React.useEffect(() => {
        const timer = setTimeout(() => {
            onClose?.();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    const getAlertColor = () => {
        switch (type) { 
            case 'success':
                return Colors.Success;
            case 'error':
                return Colors.Danger;
            case 'warning':
                return Colors.Warning;
            case 'info':
                return Colors.Info;
            default:
                return Colors.Gray;
        }
    };

    return (
        <div style={{ backgroundColor: getAlertColor(), color: 'white', padding: '10px', borderRadius: '5px', position: 'fixed', top: '20px', right: '20px', zIndex: 1000, animation: 'fadeIpUp 0.8s ease-in-out', fontSize: Fonts.grande, textAlign: 'center', minWidth: '200px' }}>
            {message}
        </div>
    );
}

export default Alert;