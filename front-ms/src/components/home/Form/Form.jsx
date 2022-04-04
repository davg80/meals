import React, { useState, useContext } from 'react'
import { toast } from 'react-toastify';
import './Form.css'
import Google from './google.svg';
import Facebook from './facebook.svg';
import Apple from './apple.svg';
import Eye from './eye-mdp.svg';
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from "../../../App"
import axios from 'axios'

export default function Form({ viewForm, setViewForm }) {
    // console.log(viewForm);
    // console.log(setViewForm);
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { user, setUser } = useContext(UserContext);
    // console.log(user); //Object { loggedIn: false }
    const login = (e) => {
        e.preventDefault();
        let credentials = { 'username': email, 'password': password };
        // console.warn(user)

        axios.post('http://127.0.0.1:8000/api/login_check', credentials)
            .then(response => response.data.token)
            .then(token => {
                localStorage.setItem('token', token)
                setUser({ 'loggedIn': true })
                localStorage.setItem('loggedIn', true)
                toast.success('Content de vous revoir!')
                if (localStorage.getItem('token') && localStorage.getItem('loggedIn')) {
                    navigate('/feed')
                }
            })
            .catch(error => {
                toast.error("Erreur d'identifiants!")
            })

    }

    const handleEyes = (e) => {
        let passwordInput = document.querySelector('#password');
        if (e.type === "mousedown") {
            passwordInput.setAttribute('type', 'text');
        } else {
            passwordInput.setAttribute('type', 'password');
        }
    }

    const setView = (name) => {
        setViewForm(name)
    }
    let typeLogin;
    if (viewForm === "login") {
        typeLogin = <div className='remember-me'>
            <div>
                <input type="checkbox" name="remember-me" id="remember-me" />
                Se souvenir de moi
            </div>
            <p className='password-forgot'>Mot de passe oublié ?</p>
        </div>
    }
    return (
        <>
            <form>
                <div>
                    <label htmlFor="username">Email<sup>*</sup></label>
                    <input type="email" name="username" id="username" placeholder='mail@website.com' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password<sup>*</sup></label>
                    <div className='blockForm'>
                        <input type="password" name="password" id="password" placeholder='Mot de passe' onChange={(e) => setPassword(e.target.value)} />
                        <img src={Eye} alt="Visibility Mot de passe" className="eyes" width="20px" onMouseDown={handleEyes} onMouseUp={handleEyes} />
                    </div>
                </div>
                {typeLogin}
                <div className='form-center'>
                    <button onClick={login} className="btn-submit" >{viewForm === "login" ? "Se Connecter" : "S'inscrire"}</button>
                </div>
            </form>
            <div className='form-center'>
                <button className="link-brand"><img src={Google} alt="Icon Google" />
                    Se connecter avec Google</button>
            </div>
            <div className='form-center'>
                <button className="link-brand"><img src={Facebook} alt="Icon Facebook" />
                    Se connecter avec Facebook</button>
            </div>
            <div className='form-center'>
                <button className="link-brand"><img src={Apple} alt="Icon Apple" />
                    Se connecter avec Apple</button>
            </div>
            <div className='form-center'>
                <p className="no-register">Vous n’avez pas encore de compte ?</p>
                <p className="register" onClick={() => setView('register')}>S’inscrire</p>
            </div>
            <div className='form-center'>
                <Link to="/community"><button className="btn-submit">Continuer sans s'inscrire</button></Link >
            </div>
        </>
    )
}
