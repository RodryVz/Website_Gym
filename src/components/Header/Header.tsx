import "./Header.css"
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { useState } from "react";
import {Link} from "react-scroll";

const Header = () => {
    const mobile = window.innerWidth <= 768 ? true : false;
    const [manuOpened, setMenuOpened] = useState(false)

    return (
        <div className="header">
            <img src={Logo} alt="" className="logo" />
            {manuOpened === false && mobile === true ? (
                <div style={{backgroundColor: 'var(--appColor)', padding: '0.5rem', borderRadius: '5px'}}
                onClick={()=> setMenuOpened(true)}>
                    <img src={Bars} alt="" style={{width: '1.5rem', height: '1.5rem'}}/>
                </div>
            ) : (
                <ul className="header-menu">
                    <li>
                        <Link onClick={()=> setMenuOpened(false)}
                        activeClass="active"
                        to="header"
                        spy= {true}
                        smooth= {true}>
                        HOME
                        </Link>
                    </li>

                    <li>
                    <Link onClick={()=> setMenuOpened(false)}
                    to="programs"
                    spy= {true}
                    smooth= {true}>
                    PROGRAMAS
                    </Link>
                    </li>

                    <li>
                    <Link onClick={()=> setMenuOpened(false)}
                    to="reason"
                    spy= {true}
                    smooth= {true}>
                    PORQUE NOSOTROS
                    </Link>
                    </li>

                    <li>
                    <Link onClick={()=> setMenuOpened(false)}
                    to="plans"
                    spy= {true}
                    smooth= {true}>
                    PLANES
                    </Link>
                    </li>

                    <li>
                    <Link onClick={()=> setMenuOpened(false)}
                    to="Testimonials"
                    spy= {true}
                    smooth= {true}>
                    RESEÑAS
                    </Link>
                    </li>
                </ul>
            )}
        </div>
    )
}

export default Header
