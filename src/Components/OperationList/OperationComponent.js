import React from 'react'

const OperationComponent = ({numberClick}) => {
    const handleClick=(e)=>{
        numberClick(e)
    }

    return (
        <>
            <button className='btn__Number' value={"+"} onClick={(e) => handleClick(e)}>+</button>
            <button className='btn__Number' value={"-"} onClick={(e) => handleClick(e)}>-</button>
            <button className='btn__Number' value={"/"} onClick={(e) => handleClick(e)}>/</button>
            <button className='btn__Number' value={"*"} onClick={(e) => handleClick(e)}>*</button>
        </>
    )
}

export default OperationComponent