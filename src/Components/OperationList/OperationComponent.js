import React from 'react';

const OperationComponent = ({ numberClick }) => {
    const handleClick = (e) => {
        numberClick(e)
    }

    return (
        <>
            <div className='btn__Container'>
                <button className='btn__Number' value={"+"} onClick={(e) => handleClick(e)}>+</button>
            </div>
            <div className='btn__Container'>
                <button className='btn__Number' value={"-"} onClick={(e) => handleClick(e)}>-</button>
            </div>
            <div className='btn__Container'>
                <button className='btn__Number' value={"/"} onClick={(e) => handleClick(e)}>/</button>
            </div>

            <div className='btn__Container'>
                <button className='btn__Number' value={"*"} onClick={(e) => handleClick(e)}>*</button>
            </div>
            <div className='btn__Container'>
                <button className='btn__Number' value={"result"} onClick={(e) => handleClick(e)}>=</button>
            </div>
            <div className='btn__Container'>
                <button className='btn__Number' value={"reset"} onClick={(e) => handleClick(e)}>CE</button>
            </div>
        </>
    )
}

export default OperationComponent