import { PieceType } from '../utils/pieces';
import './piece.scss';

export const Piece = ({image, text, quantity, id}: PieceType) => {
    return(
        <li className='piece' id={id}>
            <img className='piece_image' src={image} alt={text}/>
            <h3 className='piece_title'>{text}</h3>
            <p>x{quantity}</p>
        </li>
    )
}