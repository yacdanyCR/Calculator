import { useState } from 'react';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import OperationComponent from '../OperationList/OperationComponent';
import './style.css';

const Calculator = () => {
    const [num, setNumber] = useState("0");
    const numbers = [];

    for (let index = 0; index < 10; index++) {
        numbers.push(index);
    }

    const numberClick = (e) => {
        switch (e.target.value) {
            case "result": calculateResult(eval(num));
                break;
            case "reset": res();
                break;
            default:
                let previous = num;
                previous = previous + e.target.value;
                setNumber(previous);
                break;
        }
    }

    const calculateResult = () => {
        setNumber(eval(num))
    }

    const res = () => {
        setNumber("");
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
                    <OperationComponent numberClick={numberClick} />
                </div>
            </div>
        </section>
    )
}

export default Calculator