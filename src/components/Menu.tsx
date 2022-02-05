import { MenuButton } from "./MenuButton"
import './menu.scss'
import { LinksTo } from "./App"

export const Menu = () => {
  return (
    <nav className='menu'>
      <MenuButton text="Reglas del Juego" linkTo={LinksTo.rules}/>
      <MenuButton text="Fichas" linkTo={LinksTo.pieces}/>
      <MenuButton text="Juego" linkTo={LinksTo.game}/>
    </nav>
  )  
}