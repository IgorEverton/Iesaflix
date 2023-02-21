import React from 'react';
import {Link} from 'react-router-dom'
import Logo from '../../img/LogoMain.png'
import './menu.css';
import Button from "../Button/Button";

export default function Menu(){
    return(
        <nav className="Menu">
            <Link to="/">    
                <img className="Logo" src={Logo} alt-="IesaFlix Logo"></img>
            </Link>

            <Button as={Link}to="/cadastro/video" className="ButtonLink">
            Novo Vídeo
            </Button>
        </nav>
    ); 
}