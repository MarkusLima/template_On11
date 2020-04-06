import React from 'react';
import './style.css';
import logo from '../../assets/logo.svg';
import {FiArrowLeft} from 'react-icons/fi';
import {Link} from 'react-router-dom';

export default function NewIncidents() {
  return (
    <div className="new-incident-container">
    <div className="content">
        <section>
            <img src={logo} alt="BigHero" />
            <h1>Cadastrar novo caso</h1>
            <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
            <Link className="back-link" to="/profile">
                <FiArrowLeft size="25" color="red" />
                Voltar para home
            </Link>
        </section>
        <form>
            <input placeholder= "Titulo do caso"/>
            <textarea placeholder= "Descrção"/>
            <input placeholder= "Valor em reais" />
        
            <button className="button" type="submit">Registrar</button>
        </form>
    </div>

</div>
  );
}
