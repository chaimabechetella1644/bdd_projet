
import Cartefavoris from './compenents/carteFavoris';
import Footer from './compenents/footer'
import { useRef } from 'react';
import Navbar from './compenents/navbar';
import './css/favoris.css'

export default function Favoris() {
    
    return (
        <div className="Panier">
            <Navbar/>
            <div id='page'>
            <div className="page2">
                <h1> Favoris</h1>
                <div className="cards">
                    <Cartefavoris/>
                    <Cartefavoris/>
                    <Cartefavoris/>
                    <Cartefavoris/>
                    <Cartefavoris/>
                    <Cartefavoris/>
                    <Cartefavoris/>
                    <Cartefavoris/>
                    
                </div>

                <div class="circle circle1"></div>
                <div class="circle circle2"></div>
                <div class="circle circle4"></div>

            </div>
            </div>
              

            <Footer/>


        </div>



    )
}