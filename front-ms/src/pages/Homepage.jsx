import React from 'react'
import Home from '../components/home/Home'
import Card from '../components/home/Card/Card'
import './Homepage.css';

export default function Homepage() {
    let images = [];
    for (let i = 1; i <= 9; i++) {
        images.push(`image${i}.jpg`);
    }

    return (
        <div className='Home'>
            <Home />
            <div className='container-home'>
                <h1 className='Home-title'>Quel sera votre prochain repas ?</h1>
                <div className='block-cards'>
                    <div className='cards'>
                        {images.map((image, index) => {
                            return <div key={index}>
                                < Card image={image} index={index} />
                            </div>
                        })}
                    </div>
                    <div className="blur-progessive"></div>
                </div>
            </div>
        </div>
    )
}
