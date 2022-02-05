import './menuButton.scss';
import { Link } from "react-router-dom";
import { LinksTo } from './App';


interface MenuButtonProps{
    text:string;
    linkTo: LinksTo;
}

export const MenuButton = ({text, linkTo}: MenuButtonProps) => <Link className='menuButton' to={`/${linkTo}`}>{text}</Link>