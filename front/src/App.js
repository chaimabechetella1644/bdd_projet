

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
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

function App({product_id}) {
  
  const dispatch = useDispatch();

    useEffect(() => {
        axios.get('http://localhost:7000/categories/select').then((response) => {
        dispatch({ type: 'SET_CATEGORIES', payload: response.data });
        console.log(response.data);
        });
    }, [dispatch]);
    const categorieList = useSelector((state) => state.categorieList);  


    const [productList, setProductList] = useState([]);
    useEffect( () => {
      axios.get('http://localhost:7000/product/select').then( (response) => {
        setProductList(response.data)
        
      } )
    })
      
  

  return (

    
    <div className="App">
      <BrowserRouter>
      
      <Routes>
        <Route path="/" exact element={<Home />} />
        {categorieList.map( (val) => { return(
        <Route path={`/${val.categories_name}`}  exact element={<Product categorie ={val.categories_name}/>} />
        )})}
        {/* <Route path="/women" exact element={<ProductW/>} />
        <Route path="/machines" exact element={<ProductEqui/>} /> */}
        <Route path="/panier" exact element={<Panier/>} />
        <Route path="/compte" exact element={<Signup/>} />
        <Route path='/login'exact element={<Login />} />
        <Route path='/favoris' exact element={<Favoris />} />
        {productList.map( (val)=> { return ( 
        <Route path={`${val.product_id}`} exact element={<MyProduct myProduct = {val}/>}></Route>
        )})}
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
