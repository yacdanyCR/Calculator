import { useState } from 'react';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import OperationComponent from '../OperationList/OperationComponent';
import './style.css';

const Calculator = () => {
    const [num, setNumber] = useState("");
    const [lastOperation, setlastOperation] = useState("");
    const [operation, setoperationCompleted] = useState(false);
    const numbers = [];

    for (let index = 0; index < 10; index++) {
        numbers.push(index);
    }

    const numberClick = (e) => {
        let previous = num;
        if (e.target.value !== "result") {
            previous = previous + e.target.value;
        }

        switch (e.target.value) {
            case "result":
                calculateResult(num, previous);
                break;
            case "reset":
                reset();
                break;
            default:
                if (operation) {
                    let number = e.target.value;
                    makeOperation(number);
                } else {
                    setNumber(previous);
                }
                break;
        }
    }

    const makeOperation = (number) => {
        setNumber("");
        setNumber(number);
        setoperationCompleted(false);
    }

    const calculateResult = (num, previous) => {
        setNumber(eval(num));
        setlastOperation(previous + "=");
        setoperationCompleted(true)
    }

    const reset = () => {
        setNumber("");
        setlastOperation("");
    }

    return (
        <section>
            <div className='app__Section'>
                <div className='calculator__Display'>
                    <div className='previous__Operation'>
                        <span>{lastOperation}</span>
                    </div>
                    <div className='result__Operation'>
                        <span>{num}</span>
                    </div>
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