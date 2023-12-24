
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
import Admin from './Admin/Admin';
import Offres from './Admin/offres';
import Commande from './Admin/commande';
import ProductAd from './Admin/productAd';
import CategorieiAd from './Admin/categoriesAd';
import Profil from './Admin/profile';
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
        <Route path='/admin' exact element={<Profil/>}></Route>
        <Route path='/offre' exact element={<Offres/>}></Route>
        <Route path='/commande' exact element={<Commande/>}></Route>
        <Route path='/produitadmin' exact element={<ProductAd/>}></Route>
        <Route path='/categoriesadmin' exact element={<CategorieiAd/>}></Route>
        <Route path='/profil' exact element={<Profil/>}></Route>

        
      </Routes>
    </BrowserRouter>

        
    </div>
  );
}

export default App;
