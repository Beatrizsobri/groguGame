import { Link } from "react-router-dom";

export const MenuButton = ({text, linkTo}) => <Link to={linkTo}>{text}</Link>