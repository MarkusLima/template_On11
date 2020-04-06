import React from 'react';
import './style.css';
import bigHero from '../../assets/heroes.png';
import LogoImg from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom'

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img style={{ maxWidth: 200, maxHeight: 200 }} src={LogoImg} alt="Big" />

                <form>
                    <h1>Faça seu Logon</h1>
                    <input></input>
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size="25" color="red" />
                        Não tenho Cadastro
                    </Link>
                </form>

            </section>
            <img style={{ width: 500, height: 500 }} src={bigHero} alt="BigHero" />
        </div>
    );
}
