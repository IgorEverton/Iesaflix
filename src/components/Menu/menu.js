import React from "react";
import Logo from '../../img/LogoMain.png'
//import ButtonLink from "../Button/ButtonLink";
import './menu.css';
import Button from "../Button/Button";

export default function Menu(){
    return(
        <nav className="Menu">
            <a href="/">    
                <img className="Logo" src={Logo} alt-="IesaFlix Logo"></img>
            </a>

            <Button as="a"href="/" className="ButtonLink">
            Novo Vídeo
            </Button>
        </nav>
    ); 
}