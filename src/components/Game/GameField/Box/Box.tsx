import './box.scss';
import grogu from '../../../../Images/Grogu-the-child.png'

interface BoxProps {
    isGroguPresent:Boolean;
}

export const Box = ({isGroguPresent} : BoxProps) => {
    return(
    <li className="box">
        {isGroguPresent && <img className="box_image" src={grogu} alt='Grogu'/>
        }
    </li>
    )
};