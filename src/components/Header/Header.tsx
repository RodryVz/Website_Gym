import "./Header.css"
import Logo from "../../assets/logo.png";

const Header = () => {
    return (
        <div className="header">
            <img src={Logo} alt="" className="logo"/>

            <ul className="header-menu">
                <li>HOME</li>
                <li>PROGRAMAS</li>
                <li>PORQUE NOSOTROS</li>
                <li>PLANES</li>
                <li>RESEÑAS</li>
            </ul>
        </div>
    )
}

export default Header