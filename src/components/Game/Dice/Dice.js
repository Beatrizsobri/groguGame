import './dice.scss';

export const Dice = ({diceValue,handleOnClick}) => {
    return (
        <button onClick={handleOnClick} className="dice">
            {diceValue}
        </button>
    )
}