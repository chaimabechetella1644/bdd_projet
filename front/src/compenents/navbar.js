
import logo from '../images/Group 1.png' ;
import icon1 from '../images/Vector.png' ;
import icon2 from '../images/Vector (2).png' ;
import icon3 from '../images/Vector (1).png' ;
import icon4 from '../images/Vector (5).png' ;
import { NavLink } from 'react-router-dom';
import '../css/home.css'


export default function Navbar() {
    let img = icon2
return (

    <div className="navbar">
        <ul className="left">
          <li> <NavLink to="/"> <img src={logo} alt=""/></NavLink></li>
        </ul>

        <div className="center">
          <NavLink to="/" style={({isActive})=>{
                return isActive ? { color: '#EE873D'} : {}
                }} > Home </NavLink>
          <NavLink to="/men" style={({isActive})=>{
                return isActive ? { color: '#EE873D'} : {}
                }}> Men </NavLink>
          <NavLink to="/women" style={({isActive})=>{
                return isActive ? { color: '#EE873D'} : {}
                }}> Women </NavLink>
          <NavLink to="/machines" style={({isActive})=>{
                return isActive ? { color: '#EE873D'} : {}
                }}> Machines </NavLink>
           <NavLink to="/admin">admin</NavLink>
        </div>

        <div className="right">
          <NavLink to="/favoris" > <img src={icon1} alt="" /> </NavLink>
          <NavLink to="/panier" onClick={({isActive}) => { isActive? img={icon2} : img={icon4} }} > 
          {/* <img src={isActive('/panier') ? icon2 : icon4} alt="" /> */}
          <img src={img}/>
          </NavLink>
          <NavLink to="/compte"> <img src={icon3} alt=""/> </NavLink>
          <NavLink to="/product">page</NavLink>
         
        </div>
      </div>
)
}