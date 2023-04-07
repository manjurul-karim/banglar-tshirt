import React from 'react';
import './TshirtCard.css'

const TshirtCard = ({tshirt}) => {
    const {name, price,picture,gender} = tshirt
    return (
        <div className='tshirt-card'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <h2>{price}</h2>
            <p>Gender:{gender}</p>

        </div>
    );
};

export default TshirtCard;