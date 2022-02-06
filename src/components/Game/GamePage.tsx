import { useState } from 'react';
import { DiceContainer } from './Dice/DiceContainer';
import './gamePage.scss';

export type DiceValueType = 'grogu' | 'egg' | 'frog' | 'cookie';

export const GamePage = () => {
    const [diceValue, setDiceValue ] = useState<DiceValueType>()


    const handleOnClick = () => {
        throwTheDice();
    }

    const throwTheDice = () => {
        const diceValues:DiceValueType[] = ['frog', 'egg','grogu', 'cookie'];
        const randomNumber = Math.floor(Math.random() * 4)
        const result = diceValues[randomNumber];
        setDiceValue(result);
        return result;
    }

    return (
        <main className='gamePage'>
            <DiceContainer diceValue={diceValue} handleOnClick={handleOnClick}/>
            <div>
            </div>
        </main>
    )

}