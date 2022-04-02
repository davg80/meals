import React from 'react'
import './Card.css'
import like from './icons/like.svg'
import comment from './icons/comment.svg'
import send from './icons/send.svg'
import follow from './icons/follow.svg'
import user from './icons/user.png';


export default function Card(props) {
    // console.log(`"./images/${props.image}"`);
    let noms = ['Meals Saveurs', 'Meals Saveurs', 'Gérard Menfain', 'Claire de la vie', 'David Le Frigo', 'Marie Olay', 'Colette Stérole', 'Armelle Couvert', 'Meals Saveurs'];
    return (
        <div className='card'>
            <header className='header-card'>
                <div className='icons-block-left'>
                    <p><img src={user} alt="Icone avatar" width="20px" /></p>
                    <p>{noms[props.index]}</p>
                </div>
                <div className='icons-block-right'>
                    <p><img src={follow} alt="Icone follower" width="20px" /></p>
                </div>
            </header>
            <main className='picture-card'>
                <img src={'images/' + props.image} alt="Fond de carte" width="421px" />
            </main>
            <footer>
                <div className="icons">
                    <div className='icons-block-left'>
                        <p><img src={like} alt="Icone like" width="20px" />2K8</p>
                        <p><img src={comment} alt="Icone comment" width="20px" />18</p>
                    </div>
                    <div className='icons-block-right'>
                        <p><img src={send} alt="Icone envoie" width="20px" /></p>
                    </div>
                </div>
                <h3 className='title-card'>Sashimi de saumon</h3>
            </footer>
        </div>
    )
}
