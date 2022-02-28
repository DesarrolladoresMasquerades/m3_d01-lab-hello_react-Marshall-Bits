import logo from "../images/ironhack-logo-xs.png"
import menuButton from "../images/menu-top-xs.png"

export default function Navbar() {
    return (
        <div className="nav-bar">
            <img src={logo} alt="logo" />
            <img className="small-img" src={menuButton} alt="button-menu" />
        </div>
        )
}