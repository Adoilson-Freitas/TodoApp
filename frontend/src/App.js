import React from 'react'

import './App.css'
import Menu from '../src/template/menu'
import Routes from './router'


function App() {
  return (
    <div className="App container">
      <Menu />
      <Routes />
    </div>
  );
}

export default App;
