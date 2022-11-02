import React from 'react';
import Vector from "../images/Vector.svg";
import { AiFillCloseCircle } from 'react-icons/ai'
import { useHistory } from 'react-router-dom'
import { useState } from "react";
import '../styles/new.css';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



function New() {
    
    let history = useHistory()
  
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [numero, setNumero] = useState("")
    
    function handleSave(){
      const data = {
        name, email, numero
      }
      console.log(data)

  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={Vector} />
        <h1>Contact+</h1>
        <button><Link to="/Home"><AiFillCloseCircle /></Link></button>
      </header>
      <main>
            <div className="card-post">
                <h1>Novo Contato</h1>
                <div className="line-post"></div>

                <div className="card-body-post">
             <form>     
            <input placeholder='Nome:' value={name} onChange={e => setName (e.target.value)}/>
            <input placeholder='E-mail:' value={email} onChange={e => setEmail (e.target.value)}/>
            <input placeholder='Telefone:' value={numero} onChange={e => setNumero (e.target.value)}/>
            <div className='btn-post'>
              <button onClick={handleSave()}>Salvar Contato</button>
            </div>
            </form>
                </div>
            </div>
      </main>
    </div>
  );
}

export default New
;



