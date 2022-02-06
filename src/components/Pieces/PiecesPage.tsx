import './piecesPage.scss';
import {pieces} from '../coms/pieces';
import { PiecesList } from './PiecesList';

export const Pieces = () => {
    return (
        <main className='piecesPage'>
            <PiecesList pieces={pieces}/>
        </main>
    )
}