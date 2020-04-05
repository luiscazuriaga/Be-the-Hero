import React, { useState, useContext } from 'react'
import {Link , useHistory} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';
import { ThemeContext } from 'styled-components'

import api from '../../services/api'

import './styles.css'

import HerosImg from '../../assets/heroes.png';
import LogoImg from '../../assets/logo.svg'

export default function Logon(){ 
    const [id, setID] = useState('');
    const history = useHistory();
   async function handleLogin(e){
     e.preventDefault();

     try {
         const response = await api.post('sessions', {id})

         localStorage.setItem('ongID', id)
         localStorage.setItem('ongName', response.data.name)

         history.push('/profile');

     } catch (err) {
         alert("Falha no login, tente novamente.");
     }
   }


   const { logo } = useContext(ThemeContext)
return(
<div className="logon-container">
    <section className="form">
    <img src={logo} alt="Be the Heroes"/>

    <form onSubmit={handleLogin}> 
        <h1>Faça seu Logon</h1>

        <input
        type="text"
         placeholder="Sua ID"
         value={id}
         onChange={e => setID(e.target.value)}
         />
         
        <button type="submit" className="button">Entrar</button>

        <Link className="back-link" to="/register">
            <FiLogIn size={22} color="#E02041" />
            Não tenho cadastro
        </Link>
    </form>
    </section>

    <img src={HerosImg} alt="Heroes"/>
    
</div>
);

}