import React, { useContext } from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
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
            <ul className='liste'>
                <li className="logo-sidebar"><img src={Logo} alt="Logo de Mealsaveurs" /></li>
                <li className='separator'></li>
                <li className="items">Feed</li>
                <li className="items">Ajouter un post</li>
                <li className="items">Mes j'aimes</li>
                <li className="items">Mon planning</li>
                <li className="items">Ma liste de course</li>
                <li className="items">Mon carnet</li>
                <li className="items">Mon blog</li>
                <li className='separator'></li>
                <li className="items">Producteurs locaux</li>
                <li className="items">Mon profil</li>
                <li className="items">Paramètres</li>
                <li className='separator'></li>
                <li className="items">Upgrade</li>
                <li className='separator'></li>
                <li className="items" onClick={logout}>Deconnexion</li>
                <li className='separator'></li>
            </ul>
        </nav>
    )
}
