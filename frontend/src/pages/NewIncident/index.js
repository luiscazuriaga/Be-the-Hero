import React, { useState, useContext } from 'react'
import {Link , useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi'
import { ThemeContext } from 'styled-components'

import api from '../../services/api'

import './styles.css';


export default function Newincident(){

const [title , setTitle] = useState(''); 
const [description , setDescription] = useState(''); 
const [value , setValue] = useState(''); 
 
const ongID = localStorage.getItem('ongID')
const history = useHistory();

      async function handleNewIncident(e){
        e.preventDefault();    
        
        const data = {
          title,
          description,
          value,
        }

        try {
          await api.post('incidents', data,{
            headers:{
              Authorization: ongID,
            }
          })
          history.push('/profile');
        } catch (err) {
          alert('Erro ao cadastrar caso, tente novamente')
        }

      }

      const { logo } = useContext(ThemeContext)
       return(

        
        <div className="new-incident-container">
             <div className="content">
                 <section>
                   <img src={logo} alt="Be the Heroes"/>

                   <h1>Cadastrar novo caso</h1>
                   <p>Descreva o texto detalhadamente para encontrar um Herói para resolver isso</p>

                   <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para home
                   </Link>
                 </section>

                 <form onSubmit={handleNewIncident}>
                       <input 
                       placeholder ="Titulo do caso"
                       value={title}
                       onChange={e => setTitle(e.target.value)}
                       />

                       <textarea 
                       placeholder = "Descrição"
                       value={description}
                       onChange={e => setDescription(e.target.value)} 
                       />

                       <input 
                       placeholder="Valor em reais"
                       value={value}
                       onChange={e => setValue(e.target.value)}
                       />


                           

                       <button className="button" type='submit'>Cadastrar</button> 
                 </form>
             </div>
        </div>
                 
       );

}