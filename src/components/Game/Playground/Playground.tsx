import { ChargeZone } from './ChargeZone';
import './playground.scss';

interface PlaygroundProps {
    groguPosition: number[];
}

export const Playground = ({groguPosition}: PlaygroundProps) => {
    return(
        <div className='playground'>
            <ChargeZone groguPosition={groguPosition}/>
            <div className="cabinet">

            </div>
        </div>
    )
}