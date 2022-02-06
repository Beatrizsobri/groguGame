import "./diceButton.scss";

interface DiceButtonProps {
    handleOnClick: () => void;
}

export const DiceButton = ({handleOnClick}: DiceButtonProps) => <button onClick={handleOnClick} className="diceButton">¡Tira el dado!</button>;