import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RouterPages from '../../../RoutePages/RouterPages';
import FormField from '../../../components/FormField';


export default function CadastroCategoria(){
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000'
} 
  const [novaCategorias, setNovaCategoria] = useState([])
  const [valores, setValores] = useState('valoresIniciais')


  
  function setValue(chave, valor){
    setValores({
    ...valores,
  [chave]: valor})
  }
  function handleChange(e){
    setValue(
      e.target.getAttribute('name'), e.target.value
      )
  }

  return(
      <RouterPages>
        <h1>Cadastro de Categoria: {valores.nome}</h1>
        
        <form onSubmit={function submeterForme(e){
          e.preventDefault()
          setNovaCategoria([
            ...novaCategorias, valores
          ]);
          setValores(valoresIniciais);
          
        }}>
          <FormField 
            label="Nome da Categoria"
            type="????"
            name=""
            value={value}
            onChange={onChange}/>
          <FormField 
            label="Descrição"
            type={type}
            name={nome}
            value={value}
            onChange={onChange}/>
          <FormField 
            label="Cor"
            type="color"
            name="cor"
            value={value}
            onChange={onChange}/>
          <button>
            Cadastrar
          </button>
        </form>
            <ul>
                {novaCategorias.map((novaCategorias, i) => {
                  return(
                    <li key={`${novaCategorias}${i}` }>
                      {novaCategorias.nome}
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