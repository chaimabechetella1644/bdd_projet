
import logo from '../images/Group 1.png' ;
import icon1 from '../images/Vector.png' ;
import icon2 from '../images/Vector (2).png' ;
import icon3 from '../images/Vector (1).png' ;
import icon4 from '../images/Vector (5).png' ;
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import '../css/home.css'


export default function Navbar() {
    let img = icon2


    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('http://localhost:7000/categories/select').then((response) => {
        dispatch({ type: 'SET_CATEGORIES', payload: response.data });
        console.log(response.data);
        });
    }, [dispatch]);
    const categorieList = useSelector((state) => state.categorieList);



    

return (

    <div className="navbar">
        <ul className="left">
          <li> <NavLink to="/"> <img src={logo} alt=""/></NavLink></li>
        </ul>

        <div className="center">
          <NavLink to="/" style={({isActive})=>{
                return isActive ? { color: '#EE873D'} : {}
                }} > Home </NavLink>
            {categorieList.map( (val) => { return (   
          <NavLink to= {`/${val.categories_name}`} categorie ={val.categories_name} style={({isActive})=>{
                return isActive ? { color: '#EE873D'} : {}
                }}> {val.categories_name} </NavLink>
            )} ) } 
          {/* <NavLink to="/women" style={({isActive})=>{
                return isActive ? { color: '#EE873D'} : {}
                }}> sportswear </NavLink>
          <NavLink to="/machines" style={({isActive})=>{
                return isActive ? { color: '#EE873D'} : {}
                }}> equipement </NavLink> */}
           <NavLink to="/admin">admin</NavLink>
        </div>

        <div className="right">
          <NavLink to="/favoris" > <img src={icon1} alt="" /> </NavLink>
          <NavLink to="/panier" onClick={({isActive}) => { isActive? img={icon2} : img={icon4} }} > 
          {/* <img src={isActive('/panier') ? icon2 : icon4} alt="" /> */}
          <img src={img}/>
          </NavLink>
          <NavLink to="/compte"> <img src={icon3} alt=""/> </NavLink>
          
         
        </div>
      </div>
)
}