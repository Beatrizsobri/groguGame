import './chargeStep.scss';
import grogu from '../../../../images/grogu.png';

interface ChargeStepProps {
    isGrogu: boolean;
}

export const ChargeStep = ({isGrogu}: ChargeStepProps) => {
    return(
    <li className="chargeStep">
        {isGrogu && <img className="chargeStep_grogu" src={grogu} alt='Grogu'/>}
    </li>
    )
};
