import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './App';
import CadrastroVideo from './pages/CadrastroVideo/index' 
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CadastroVideo from './pages/CadrastroVideo/index';
import CadastroCategoria from './pages/CadastroCategoria/index'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route  path='/cadastro/video' component={CadastroVideo}/>
      <Route  path='/cadastro/categoria' component={CadastroCategoria}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
