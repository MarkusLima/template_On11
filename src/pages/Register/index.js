import React from 'react';
import './style.css';
import bigHero from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';
import {Link} from 'react-router-dom'

export default function Register() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={bigHero} alt="BigHero" />
                    <h1>Cadastro</h1>
                    <p>Faça cadastro, entre na plataforma e ajude pessoas a encontrar os casos da sua OMG</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size="25" color="red" />
                        Não tenho Cadastro
                    </Link>
                </section>
                <form>
                    <input placeholder= "Nome da OMG"/>
                    <input placeholder= "E-mail"/>
                    <input placeholder= "Whatsapp" />
                    <div className="input-group">
                        <input placeholder="Cidade"/>
                        <input placeholder="UF" />
                    </div>
                    <button className="button" type="submit">Registrar</button>
                </form>
            </div>

        </div>
    );
}
