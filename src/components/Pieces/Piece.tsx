import { PieceType } from '../coms/pieces';
import './piece.scss';

export const Piece = ({image, text, quantity, id}: PieceType) => {
    return(
        <li className='piece'>
            <img className='piece_image' src={image} alt={id}/>
            <h3 className='piece_title'>{text}</h3>
            <p>x{quantity}</p>
        </li>
    )
}