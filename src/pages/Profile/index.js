import React from 'react';
import './style.css';
import Logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi'

export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={Logo} alt="BiHero" />
                <span>Ben vindo(a), APAD</span>
                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={18} color="#e02041" />
                </button>
            </header>
            <h1>Casos cadastrados</h1>
            <ul>
                <li>
                    <strong>CASOS:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÂO:</strong>
                    <p>Decrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>
                    <button type="button">
                        <FiTrash2 size={20} color= '#a8a8b3'/>
                    </button>
                </li>
                <li>
                    <strong>CASOS:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÂO:</strong>
                    <p>Decrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>
                    <button type="button">
                        <FiTrash2 size={20} color= '#a8a8b3'/>
                    </button>
                </li>
                <li>
                    <strong>CASOS:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÂO:</strong>
                    <p>Decrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>
                    <button type="button">
                        <FiTrash2 size={20} color= '#a8a8b3'/>
                    </button>
                </li>
                <li>
                    <strong>CASOS:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÂO:</strong>
                    <p>Decrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>
                    <button type="button">
                        <FiTrash2 size={20} color= '#a8a8b3'/>
                    </button>
                </li>
            </ul>
        </div>
    )
}