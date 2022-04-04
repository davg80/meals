import React, { useContext } from 'react'
import { toast } from 'react-toastify';
import { NavLink, useNavigate } from 'react-router-dom'
import './Sidebar.css'
import Logo from '../../assets/logo-orange.png'
import { UserContext } from "../../App"

export default function Sidebar() {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    const logout = () => {
        console.log("Se deconnecter");
        localStorage.removeItem('token');
        localStorage.removeItem('loggedIn');
        setUser({ loggedIn: false })
        toast.info('Revenez vite nous voir!')
        navigate('/');
    }
    return (
        <nav>
            <ul className='liste1'>
                <li className="logo-sidebar"><img src={Logo} alt="Logo de Mealsaveurs" /></li>
            </ul>
            <p className='separator'></p>
            <ul className='liste2'>
                <li className="items"><NavLink to="/feed" className={({ isActive }) => { return isActive ? "isActive-link" : "" }}>Feed</NavLink></li>
                <li className="items"><NavLink to="/post">Ajouter un post</NavLink></li>
                <li className="items"><NavLink to="">Mes j'aimes</NavLink></li>
                <li className="items"><NavLink to="">Mon planning</NavLink></li>
                <li className="items"><NavLink to="">Ma liste de course</NavLink></li>
                <li className="items"><NavLink to="">Mon carnet</NavLink></li>
                <li className="items"><NavLink to="">Mon blog</NavLink></li>
            </ul>
            <p className='separator'></p>
            <ul className='liste3'>
                <li className="items"><NavLink to="">Producteurs locaux</NavLink></li>
                <li className="items"><NavLink to="">Mon profil</NavLink></li>
                <li className="items"><NavLink to="">Paramètres</NavLink></li>
            </ul>
            <p className='separator-upgrade'></p>
            <ul className='liste4'>
                <li className="items"><NavLink to="">Upgrade</NavLink></li>
            </ul>
            <p className='separator-upgrade'></p>
            <ul className='liste5'>
                <li className="items" onClick={logout}>Deconnexion</li>
            </ul>
            <p className='separator'></p>
        </nav >
    )
}
