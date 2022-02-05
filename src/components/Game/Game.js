import './game.scss';
import { useEffect, useState } from 'react';
import { Dice } from './Dice/Dice';
import { Box } from './GameField/Box/Box.tsx';


export const Game = () => {
    const [frogQuantity, setFrogQuantity] = useState(3);
    const [eggQuantity, setEggQuantity] = useState(3);
    const [biscuitQuantity, setBiscuitQuantity] = useState(3);
    const [groguPosition, setGroguPosition] = useState(['grogu',0,0,0,0,0,0,0]);
    const [diceValue, setDiceValue ] = useState('tira el dado')


    const handleOnClick = () =>  {
        let dice = throwTheDice();
        updateState(dice);
    }

    useEffect(()=>{
        if(!frogQuantity && !eggQuantity && !biscuitQuantity){
            return wonTheGame();
        }  
        if(groguPosition.indexOf('grogu') === 7) {
            return gameOver();
        }
    },[frogQuantity,eggQuantity, biscuitQuantity,groguPosition])

    const wonTheGame = () => console.log('he ganado');

    const gameOver = () => console.log('he perdido');
    
    const throwTheDice = () => {
        const diceValues = ['frog', 'egg','grogu', 'biscuit'];
        const randomNumber = Math.floor(Math.random() * 4)
        const result = diceValues[randomNumber];
        setDiceValue(result);
        return result;
    }

    const updateState = (dice) => {
        switch (dice) {
            case 'frog':
                setFrogQuantity(frogQuantity - 1 < 0 ? 0 : frogQuantity -1);
                break;
            case 'egg':
                setEggQuantity(eggQuantity - 1 < 0 ? 0 : eggQuantity - 1);
                break;
            case 'biscuit':
                setBiscuitQuantity(biscuitQuantity - 1 < 0 ? 0 : biscuitQuantity - 1);
                break;
            case 'grogu':
                const prevGroguPosition = groguPosition.indexOf('grogu');
                const newGroguPosition = prevGroguPosition + 1;
                let groguArray = [...groguPosition];
                groguArray[newGroguPosition] = 'grogu';
                groguArray[prevGroguPosition] = 0;
                setGroguPosition(groguArray);
                break;
            default:
                break;
        }
    }

    return(
        <div className="game">
            <header className="game_header">
                <Dice diceValue={diceValue} handleOnClick={handleOnClick}/>
            </header>
            <main className='game_field'>
                <ul className='game_field_groguPath'>
                    {groguPosition.map((position) => <Box isGroguPresent = {position === 'grogu'}/>)}
                </ul>
                <ul className='game_field_cabinet'>
                    <li>
                        frog: {frogQuantity}
                    </li>
                    <li>
                        egg: {eggQuantity}
                    </li>
                    <li>
                        biscuit: {biscuitQuantity}
                    </li>
                </ul>
            </main>
        </div>

    )
}