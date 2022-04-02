import React from 'react'
import './Form.css'
import Google from './google.svg';
import Facebook from './facebook.svg';
import Apple from './apple.svg';
import Eye from './eye-mdp.svg';

export default function Form(props) {
    // console.log(props);
    let login;
    if (props.typeForm === "login") {
        login = <div className='remember-me'>
            <div>
                <input type="checkbox" name="remember-me" id="remember-me" />
                Se souvenir de moi
            </div>
            <p className='password-forgot'>Mot de passe oublié ?</p>
        </div>
    }
    return (
        <>
            <form action="">
                <div>
                    <label htmlFor="username">Email<sup>*</sup></label>
                    <input type="email" name="username" id="username" placeholder='mail@website.com' />
                </div>
                <div>
                    <label htmlFor="password">Password<sup>*</sup></label>
                    <div className='blockForm'>
                        <input type="password" name="password" id="password" placeholder='Mot de passe' />
                        <img src={Eye} alt="Visibility Mot de passe" className="eyes" width="20px" />
                    </div>
                </div>
                {login}
                <div className='form-center'>
                    <input type="submit" className="btn-submit" value={props.typeForm === "login" ? "Se Connecter" : "S'inscrire"} />
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
                <p className="register">S’inscrire</p>
            </div>
            <div className='form-center'>
                <button className="btn-submit">Continuer sans s'inscrire</button>
            </div>
        </>
    )
}
