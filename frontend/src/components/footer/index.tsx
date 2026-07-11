import Colors from "../../styles/colors";
import Fonts from "../../styles/fonts";

function Footer(){
    return (
        <footer style={{height: '26px', width: '100%', backgroundColor: Colors.Black, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: 0, zIndex: 1}}>
            <p style={{color: Colors.White, fontSize: Fonts.muito_pequeno}}>© 2026 Projeto Evol. Todos os direitos reservados - Desenvolvido por</p><a style={{color: Colors.Info, textDecoration: 'underline', fontSize: Fonts.muito_pequeno}} href="https://github.com/nicz-gom" target="_blank" rel="noopener noreferrer">: Nícolas Gomes Pacheco</a>
        </footer>
    );
}

export default Footer;