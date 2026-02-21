import { Link } from "react-router-dom";
import infnovalogo from '../../assets/icons/infnovalogo.png'

function Navbar() {
   return (
     <nav>
        <img src={infnovalogo} alt="Infnova Logo" className="logo" />
        
        <ul>
            <li><a href="">Courses</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
        </ul>

        <div className="additional-links">
            <a href="">Sign in</a>
            <a href="" className="enroll-now">Enroll Now</a>
        </div>
        
    </nav>
   )
}
export default Navbar
