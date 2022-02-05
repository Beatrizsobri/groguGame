import { MenuButton } from "./MenuButton"
import './menu.scss'

export const Menu = () => {
  return (
    <nav className='menu'>
      <MenuButton text="Reglas del Juego"/>
      <MenuButton text="Fichas"/>
      <MenuButton text="Juego"/>
    </nav>
  )  
}