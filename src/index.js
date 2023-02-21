import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import App from './App';
import CadastroVideo from './pages/video/cadastroVideo'

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CadastroCategoria from './pages/cadastro/Categoria/CadastroCategoria';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/"element={<App/>} />
      <Route path="/cadastro/video"element={<CadastroVideo/>} />
      <Route path="/cadastro/categoria"element={<CadastroCategoria/>} />
    </Routes>   
  </BrowserRouter>
);

