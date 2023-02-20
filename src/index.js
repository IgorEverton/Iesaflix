import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function CadastroVideo(){
  return(
    <>
      Página de Cadastro de Vídeo
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/"element={<App/>} />
      <Route path="/cadastro/video"element={<CadastroVideo/>} />
    </Routes>   
  </BrowserRouter>
);

