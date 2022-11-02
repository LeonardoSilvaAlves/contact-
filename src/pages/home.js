import React, { useState, useEffect } from 'react';
import Vector from '../images/Vector.svg'
import { AiOutlineSearch } from "react-icons/ai";
import axios from 'axios';

import '../styles/App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  
function Home() {

  return (
    <><header className="App-header">
      <img src={Vector} className='Vector' />
      <h1>Contact+</h1> 
      <button><Link to="/New">Novo Contato</Link></button>
    </header>
    <main className="App-Main">
      <div className="search-main">
      <input class="input-one" type="text" placeholder="Digite o nome do contato" />
      <button className='btn-back'><AiOutlineSearch /> Buscar</button> 
      </div>

      <div className='table'>
      <table border="1">
    <tr>
        <td>Nome</td>
        <td>Email</td>
        <td>Numero</td>
    </tr>
    <tr>
        <td>Leonardo</td>
        <td>bkakaferreira@gmail.com</td>
        <td>11964359044</td>
    </tr>
</table>
      </div>

    </main>
  </>
  )
  
}

export default Home;
