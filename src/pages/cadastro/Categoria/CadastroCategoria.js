import React from 'react';
import { Link } from 'react-router-dom';
import RouterPages from '../../../RoutePages/RouterPages';


export default function CadastroCategoria(){
    return(
      <RouterPages>
        <h1>Cadastro de Categoria</h1>
        
        <Link to="/">
          Ir para o Home
        </Link>
      </RouterPages>
    )
  }