import "./cabinet.scss";
import frog from "../../../../images/frog.svg";
import cookie from "../../../../images/cookie.svg";
import egg from "../../../../images/egg.svg";
import { Recipient } from "./Recipient";

interface CabinetProps {
    frogQuantity: number;
    eggQuantity: number;
    cookieQuantity: number;
}

export const Cabinet = ({frogQuantity, eggQuantity, cookieQuantity}: CabinetProps) => {
    return(
        <ul className="cabinet">
            <Recipient quantity={frogQuantity} altText="frog" image={frog}/>
            <Recipient quantity={eggQuantity} altText="egg" image={egg}/>
            <Recipient quantity={cookieQuantity} altText="cookie" image={cookie}/>
        </ul>
    )
}