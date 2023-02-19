import React from "react";
import Logo from '../../img/LogoMain.png'
import './menu.css';

export default function Menu(){
    return(
        <nav className="Menu">
            <a href="/">    
                <img className="Logo" src={Logo} alt-="IesaFlix Logo"></img>
            </a>

            <a href="/" className="ButtonLink">Novo Vídeo</a>
        </nav>
    ); 
}