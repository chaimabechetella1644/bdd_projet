
import logo from '../images/Group 1.png' ;
import icon1 from '../images/Vector.png' ;
import icon2 from '../images/Vector (2).png' ;
import icon3 from '../images/Vector (1).png' ;
import "../css/home.css"


export default function Navbar() {
return (
<div class="navbar">
            <ul class="left">
                <li> <a href=""> <img src={logo} alt=""/></a></li>
            </ul>
        
        <ul class="center">
            <li>Home</li>
            <li> Men </li>
            <li> Women</li>
            <li> Machines</li>
        </ul>
        <ul class="right">
            <li><a href=""> <img src={icon1} alt=""/> </a></li>
            <li><a href=""><img src={icon2} alt=""/></a></li>
            <li><a> <img src={icon3} alt=""/></a></li>
        </ul>
        </div>



)
}