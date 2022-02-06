import { Cabinet } from './Cabinet/Cabinet';
import { ChargeZone } from './ChargeZone/ChargeZone';
import './playground.scss';

interface PlaygroundProps {
    groguPosition: number[];
    frogQuantity: number; 
    eggQuantity: number; 
    cookieQuantity: number;
}

export const Playground = ({groguPosition, frogQuantity, eggQuantity, cookieQuantity}: PlaygroundProps) => {
    return(
        <div className='playground'>
            <ChargeZone groguPosition={groguPosition}/>
            <Cabinet frogQuantity={frogQuantity} eggQuantity={eggQuantity} cookieQuantity={cookieQuantity}/>
        </div>
    )
}