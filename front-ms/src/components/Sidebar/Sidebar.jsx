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
                <li className="items"><NavLink to="/feed" className={({ isActive }) => {
                    console.log(isActive);
                    return isActive ? "isActive-link" : ""
                }}>Feed</NavLink></li>
                <li className="items"><NavLink to="/post" className={({ isActive }) => {
                    console.log(isActive);
                    return isActive ? "isActive-link" : ""
                }}>Ajouter un post</NavLink></li>
                <li className="items"><NavLink to="account/like" className={({ isActive }) => {
                    console.log(isActive);
                    return isActive ? "isActive-link" : ""
                }}>Mes j'aimes</NavLink></li>
                <li className="items"><NavLink to="/planning" className={({ isActive }) => {
                    console.log(isActive);
                    return isActive ? "isActive-link" : ""
                }}>Mon planning</NavLink></li>
                <li className="items"><NavLink to="/shopping" className={({ isActive }) => {
                    console.log(isActive);
                    return isActive ? "isActive-link" : ""
                }}>Ma liste de course</NavLink></li>
                <li className="items"><NavLink to="/receipe" className={({ isActive }) => {
                    console.log(isActive);
                    return isActive ? "isActive-link" : ""
                }}>Mon carnet</NavLink></li>
                <li className="items"><NavLink to="/blog" className={({ isActive }) => {
                    console.log(isActive);
                    return isActive ? "isActive-link" : ""
                }}>Mon blog</NavLink></li>
            </ul>
            <p className='separator'></p>
            <ul className='liste3'>
                <li className="items"><NavLink to="/producter" className={({ isActive }) => {
                    console.log(isActive);
                    return isActive ? "isActive-link" : ""
                }}>Producteurs locaux</NavLink></li>
                <li className="items"><NavLink to="/profile" className={({ isActive }) => {
                    console.log(isActive);
                    return isActive ? "isActive-link" : ""
                }}>Mon profil</NavLink></li>
                <li className="items"><NavLink to="/settings" className={({ isActive }) => {
                    console.log(isActive);
                    return isActive ? "isActive-link" : ""
                }}>Paramètres</NavLink></li>
            </ul>
            <p className='separator-upgrade'></p>
            <ul className='liste4'>
                <li className="items"><NavLink to="/upgrade" className={({ isActive }) => {
                    console.log(isActive);
                    return isActive ? "isActive-link" : ""
                }}  >Upgrade</NavLink></li>
            </ul>
            <p className='separator-upgrade'></p>
            <ul className='liste5'>
                <li className="items" onClick={logout}>Deconnexion</li>
            </ul>
            <p className='separator'></p>
        </nav >
    )
}
