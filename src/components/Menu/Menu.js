import { MenuButton } from "./MenuButton/MenuButton"
import './menu.scss'

export const Menu = () => {
  return (
    <>
      <nav className='menu'>
        <MenuButton linkTo="/rules" text="Reglas del Juego"/>
        <MenuButton linkTo="/pieces" text="Fichas"/>
        <MenuButton linkTo="/game" text="Juego"/>
      </nav>
    </>
  )  
}