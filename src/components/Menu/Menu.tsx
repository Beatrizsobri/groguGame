import { MenuItem } from "./MenuItem";
import "./menu.scss";
import { LinksTo } from "../App";

export const Menu = () => {
  return (
    <nav className="menu">
      <MenuItem text="Reglas del Juego" linkTo={LinksTo.rules}/>
      <MenuItem text="Fichas" linkTo={LinksTo.pieces}/>
      <MenuItem text="Juego" linkTo={LinksTo.game}/>
    </nav>
  )  
}