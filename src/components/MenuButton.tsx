import './menuButton.scss';

interface MenuButtonProps{
    text:string;
}

export const MenuButton = ({text}: MenuButtonProps) => <button className='menuButton'>{text}</button>