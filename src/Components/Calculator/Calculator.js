import { useState } from 'react';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import OperationComponent from '../OperationList/OperationComponent';
import './style.css';

const Calculator = () => {
    const [num, setNumber] = useState("");
    const numbers = [];
    for (let index = 0; index < 10; index++) {
        numbers.push(index);
    }

    const numberClick = (e) => {
        let previous = num;
        previous = previous + e.target.value;
        setNumber(previous);
    }

    const calculateResult = () => {
        setNumber("Este es el resultado")
    }

    return (
        <section>
            <div className='app__Section'>
                <div className='calculator__Display'>
                    {num}
                </div>
                <div className='app__Container'>
                    {
                        numbers.map((el, index) => {
                            return <ButtonComponent number={el} key={index} numberClick={numberClick} />
                        })
                    }
                    <OperationComponent numberClick={numberClick}/>
                    <button className='btn__Number' onClick={calculateResult}>=</button>
                </div>
            </div>
        </section>
    )
}

export default Calculator