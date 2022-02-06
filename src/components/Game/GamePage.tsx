import { useState } from 'react';
import { DiceContainer } from './Dice/DiceContainer';
import './gamePage.scss';
import { Playground } from './Playground/Playground';

export type DiceValueType = 'grogu' | 'egg' | 'frog' | 'cookie';

export const GamePage = () => {
    const [frogQuantity, setFrogQuantity] = useState<number>(3);
    const [eggQuantity, setEggQuantity] = useState<number>(3);
    const [cookieQuantity, setCookieQuantity] = useState<number>(3);
    const [diceValue, setDiceValue ] = useState<DiceValueType>();
    const [groguPosition, setGroguPosition] = useState<number[]>([1,0,0,0,0,0,0,0]);

    const handleOnClick = () => {
        let dice = throwTheDice();
        updateState(dice);
    }

    const updateState = (dice: DiceValueType) => {
        switch (dice) {
            case 'frog':
                setFrogQuantity(frogQuantity - 1 < 0 ? 0 : frogQuantity -1);
                break;
            case 'egg':
                setEggQuantity(eggQuantity - 1 < 0 ? 0 : eggQuantity - 1);
                break;
            case 'cookie':
                setCookieQuantity(cookieQuantity - 1 < 0 ? 0 : cookieQuantity - 1);
                break;
            case 'grogu':
                const prevGroguPosition = groguPosition.indexOf(1);
                const newGroguPosition = prevGroguPosition + 1;
                let groguArray = [...groguPosition];
                groguArray[newGroguPosition] = 1;
                groguArray[prevGroguPosition] = 0;
                setGroguPosition(groguArray);
                break;
            default:
                break;
        }
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
            <Playground groguPosition={groguPosition} frogQuantity={frogQuantity} eggQuantity={eggQuantity} cookieQuantity={cookieQuantity}/>
        </main>
    )

}