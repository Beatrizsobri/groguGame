import './diceButton.scss';

interface DiceButtonProps {
    handleOnClick: () => void;
}

export const DiceButton = ({handleOnClick}: DiceButtonProps) => {
    return (
        <button onClick={handleOnClick} className="diceButton">¡Tira el dado!</button>
    )
}