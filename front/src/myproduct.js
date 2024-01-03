
import image12 from "./images/Rectangle 17.png"
import Carte from "./compenents/carte"
import './css/myproduct.css'
import './css/home.css'
import Navbar from './compenents/navbar';
import Footer from './compenents/footer';
import { useEffect, useState } from "react";
import axios from "axios";


export default function MyProduct({myProduct}) {

    const [productList, setProductList] = useState([]);

    useEffect( () => {
        axios.get('http://localhost:7000/product/select').then( (response) => {
          setProductList(response.data)
          
        } )
      })

    return (
        <div>
            <Navbar/>
            <div className="produit">
                <h1> {myProduct.product_name} </h1>
                <div className="info">
                <div className="left">
                    <img src={`http://localhost:7000/images/${myProduct.product_image}`} alt=""/>
                </div>
                <div className="right">
                     <h3> description</h3>
                     <p> {myProduct.description} </p>
                     <h3> select color </h3>
                     <div className="color size">
                        <p className="size1">{myProduct.color}</p>
                        
                     </div>
                     <h3> select size </h3>
                     <div className="size">
                        <p className="size1">{myProduct.size}</p>
                        
                    
                     </div>
                     <div className="button">
                        <button className="button1"> add to wish list</button>
                        <button className="button2"> add to panier</button>
                     </div>

                </div>


            </div>
            <div class="circle circle1"></div>
            <div class="circle circle3"></div>
            <div class="circle circle4"></div>

            </div>

            <div class="Product">
                    <h1 className='titre_home'> other products </h1>
                    <div className='container'>
                        <div class="cards">
                        {productList.slice(0, 12).map(product => (
           
                            <Carte product={product} />
                            
                        ))}
                            
                        </div>
                    </div>
            </div>
            <Footer/>

        </div>




    )
}