import { Link } from 'react-router-dom';
import Logo from '../../assets/icons/infnovalogo.png'

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                <img src={Logo} alt="INFNOVA LOGO" />
                </Link>
            </div> 
            <ul className="navbar-links">
                <li><Link to="/" >Courses</Link></li>
                <li><Link to="/" >About</Link></li>
                <li><Link to="/" >Contact</Link></li>
            </ul>
            <div className="additional-links">
                <a href="/">Sign In</a>
                <a href="/" className="enroll-now-btn">Enroll Now</a>
            </div>
        </nav>
    )
}