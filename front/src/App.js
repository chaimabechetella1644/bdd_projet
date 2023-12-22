
import logo from './images/Group 1.png' ;
import icon1 from './images/Vector.png' ;
import icon2 from './images/Vector (2).png' ;
import icon3 from './images/Vector (1).png' ;
import icon4 from './images/Vector (5).png' ;
import icon5 from './images/Vector (4).png'
import './css/home.css';
import { BrowserRouter, Link , Route,Routes,NavLink, Router,Switch, useLocation } from 'react-router-dom';
import Home from './home';
import Product from './product'
import ProductW from './productwomen';
import ProductEqui from './productMach';
import Panier from './panier';
import Signup from './signUp';
import Login from './login';
import Favoris from './favoris';
import MyProduct from './myproduct';
import { useState } from 'react';

function App() {
  
  // const isActive = (route) => {
  //   return window.pathname === route;
  // };

 let img = icon2 
  
  
  // function handlestate() {
  //     setpanier((prev)=>!prev)
  // }


  // const pq = useLocation()
  // const {pathing} = pq
  // console.log(pathing); 

  return (

    
    <div className="App">
      <BrowserRouter>
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

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/men" exact element={<Product/>} />
        <Route path="/women" exact element={<ProductW/>} />
        <Route path="/machines" exact element={<ProductEqui/>} />
        <Route path="/panier" exact element={<Panier/>} />
        <Route path="/compte" exact element={<Signup/>} />
        <Route path='/login'exact element={<Login />} />
        <Route path='/favoris' exact element={<Favoris />} />
        <Route path='/product' exact element={<MyProduct/>}></Route>
        
      </Routes>
    </BrowserRouter>

        
    </div>
  );
}

export default App;
