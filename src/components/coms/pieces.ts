import frog from '../../images/frog.svg';
import egg from '../../images/egg.svg';
import cookie from '../../images/cookie.svg';
import cabinet from '../../images/cabinet.png';
import chargeZone from '../../images/charge-zone.svg';
import grogu from '../../images/grogu.png';

type PieceIdType = 'frog' | 'cookie' | 'egg' | 'cabinet' | 'box' | 'grogu' | 'dice' | 'recipient';

export interface PieceType {
    id: PieceIdType;
    text: string;
    quantity: number;
    image: string;

}
export const pieces: PieceType[]  = [
    {
        id: 'frog',
        text: 'rana',
        quantity: 3,
        image: frog
    }, 
    {
        id: 'cookie',
        text: 'galleta',
        quantity: 3,
        image: cookie
    }, 
    {
        id: 'egg',
        text: 'huevo',
        quantity: 3,
        image: egg
    }, 
    {
        id: 'cabinet',
        text: 'armario',
        quantity: 1,
        image: cabinet
    },
    {
        id: 'box',
        text: 'zona de carga',
        quantity: 6,
        image: chargeZone
    },
    {
        id: 'grogu',
        text: 'Grogu',
        quantity: 1,
        image: grogu
    }
]