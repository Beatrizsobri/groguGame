import './menuItem.scss';
import { Link } from "react-router-dom";
import { LinksTo } from '../App';


interface MenuItemProps{
    text:string;
    linkTo: LinksTo;
}

export const MenuItem = ({text, linkTo}: MenuItemProps) => <Link className='menuItem' to={`/${linkTo}`}>{text}</Link>