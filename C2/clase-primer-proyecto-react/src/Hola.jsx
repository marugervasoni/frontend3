//NO SALE
import React from 'react'
import image from  './img/satisfied.png'

export default function Hola() {
    return (
        <div>
            <h1>Hola mundo!</h1>
            <div className='image'>
                <img src={image} alt="foto" />
            </div>
        </div>
    );
}