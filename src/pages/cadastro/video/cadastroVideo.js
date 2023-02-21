import React from 'react';
import { Link } from 'react-router-dom';
import RouterPages from '../../../RoutePages/RouterPages';


export default function CadastroVideo(){
    return(
      <RouterPages>
          <h1>Cadastro de Vídeo</h1>
          Página de Cadastro de Vídeo
          <Link to="/cadastro/categoria">
            Cadastar Categoria
          </Link>
      </RouterPages>
    )
  };