import React from 'react';
import './style.css';

const ButtonComponent = ({ number, numberClick }) => {

    const handleClick = (e) => {
        numberClick(e)
    }

    return (
        <div>
            <button className='btn__Number' value={number} onClick={(e) => handleClick(e)} >{number}</button>
        </div>
    )
}

export default ButtonComponent