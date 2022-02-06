import "./diceContainer.scss";
import { DiceValueType } from "../GamePage";
import { Dice } from "./Dice";
import { DiceButton } from "./DiceButton";

interface DiceContainerProps {
    diceValue?: DiceValueType;
    handleOnClick: () => void;
}

export const DiceContainer = ({diceValue,handleOnClick}: DiceContainerProps) =>{
    return(
        <div className="diceContainer">
                <Dice diceValue={diceValue}/>
                <DiceButton handleOnClick={handleOnClick}/>
        </div>
    )
}