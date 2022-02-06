import { DiceValueType } from '../GamePage';
import './dice.scss';

interface DiceProps {
    diceValue? : DiceValueType;
}

export const Dice = ({diceValue = "grogu"}: DiceProps) => {
    return (
        <div className='dice'>
            <div className={`dice_face ${diceValue}`}>
            </div>
        </div>
    )
}