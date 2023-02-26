import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RouterPages from '../../../RoutePages/RouterPages';


export default function CadastroCategoria(){
  

  const [nomeDaCategoria, setNomeDaCategoria] = useState('Nova categoria')
  const [novaCategorias, setNovaCategoria] = useState(['teste'])
  
  return(
      <RouterPages>
        <h1>Cadastro de Categoria: {nomeDaCategoria}</h1>
        
        <form onSubmit={function submeterForme(e){
          e.preventDefault()
          setNovaCategoria([
            ...nomeDaCategoria
          ])
          
        }}>

          <label>
              Nome da Categoria:
            <input
            type="text"
            value={nomeDaCategoria}
            onChange={function pegarValue(e){
              setNomeDaCategoria(e.target.value)
            }}
            />
          </label>

          <button>
            Cadastrar
          </button>
      </form>
            <ul>
                {novaCategorias.map((categorias, i) => {
                  return(
                    <li key={categorias+i }>
                      
                      {categorias}
                    </li>
                  )
                })}
            </ul>




        <Link to="/">
          Ir para o Home
        </Link>
      </RouterPages>
    )
  }