import { PieceType} from "../utils/pieces"
import { Piece } from "./Piece"
import "./piecesList.scss"

interface PiecesListProps {
    pieces: PieceType[];
}

export const PiecesList = ({pieces}:PiecesListProps) => {
    return (
        <ul className="piecesList">
            {pieces.map((piece) => {
                const {id,image,text,quantity} = piece
                return(
                    <Piece key={id} image={image} text={text} quantity={quantity} id={id}/>
                )    
            })}
        </ul>
    )
}