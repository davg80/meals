import React from 'react'
import { useState } from 'react'
import './Home.css'
import Form from './Form/Form'
import logo from '../../assets/logo-orange.png'

export default function Home() {
    const [viewForm, setViewForm] = useState("login");
    const changeView = (name) => {
        setViewForm(name);
    }
    let viewLink;
    if (viewForm === 'login') {
        viewLink = <p className="form-action">
            <span className="is-active" onClick={() => changeView("login")}>Se connecter</span>
            <span className="no-active" onClick={() => changeView("register")}>S'inscrire</span>
        </p>
    } else {
        viewLink = <p className="form-action">
            <span className="no-active" onClick={() => changeView("login")}>Se connecter</span>
            <span className='is-active' onClick={() => changeView("register")}>S'inscrire</span>
        </p>
    }
    return (
        <section className='container-form'>
            <img src={logo} alt="Logo de mealsaveurs" className='logoMS' />
            <div className='form-title'>
                <h2>Bonjour & bienvenue sur meal saveurs !</h2>
                <p>Ton futur réseau social culinaire !</p>
            </div>
            <div>
                {viewLink}
                <Form viewForm={viewForm} setViewForm={setViewForm} />
            </div>
        </section>
    )
}
