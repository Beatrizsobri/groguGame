import "./chargeZone.scss";
import { ChargeStep } from "./ChargeStep"

interface ChargeZoneProps {
    groguPosition: number[];
}

export const ChargeZone = ({groguPosition}: ChargeZoneProps) => {
    return (
        <ul className="chargeZone">
            {groguPosition.map((position) => <ChargeStep isGrogu={!!position}/>)}
        </ul>
    )
}