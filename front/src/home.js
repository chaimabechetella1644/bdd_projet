 
 import React, { useEffect, useRef } from 'react';
 import Navbar from './compenents/navbar';
 import Carte  from './compenents/carte'
 import Cartecat from './compenents/carteCategorie'
 import Footer from './compenents/footer'
 import img3 from './images/image111.png'
 import img4 from './images/NORTHPLUS_11G-677_BLK-removebg-preview.png'
 import { BrowserRouter, Link , Route,Routes,NavLink, Router,Switch, useLocation } from 'react-router-dom';
 import logo from './images/Group 1.png' ;
 import icon1 from './images/Vector.png' ;
 import icon2 from './images/Vector (2).png' ;
 import icon3 from './images/Vector (1).png' ;
 import icon4 from './images/Vector (5).png' ;
 import icon5 from './images/Vector (4).png';
 

 import './css/home.css'


 export default function Home() {
    let img = icon2 
    return(     

        <div className="body">

            <Navbar/>
        
            <header>

                <div class="page1">
                    <div class="left">
                        <h1 className="title1"> <span class="color">New</span> <span>Collection</span></h1>
                        
                        <p>Lorem ipsum dolor sit amet conse. Reprehenderit, iste quasi unde hic officiis molestiae ipsum fuga atque tempore id molestiae ipsum fuga atque tempore id.</p>
                        <div class="button">
                        <button class="button1">Shop Collection</button>
                        <button class="button2">Shop Collection</button>
                        </div>
                        <div class="circle circle1"></div>
                        <div class="circle circle2"></div>
                    </div>

                    <div class="right">
                        <img src={img3} alt=""/>
                        <div class="circle circle3"></div>
                        <div class="circle circle4"></div>
                    </div>
                </div>
            </header>
            <div className='main'>
        
                <div class="Product">
                    <h1 className='titre_home'> New Product </h1>
                    <div className='container'>
                        <div class="cards">
                            <Carte/>
                            <Carte/>
                            <Carte/>
                            <Carte/>
                            <Carte/>
                            <Carte/>
                            <Carte/>
                            
                        </div>
                    </div>
                </div>

                <div class="offres">
                        <h1 className='titre_home'> Notre offre</h1>
                        <div class="offre">
                        <div>
                        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Laboriosam sed explicabo vitae perspiciatis nisi, architecto assumenda. Officiis
                        provident ipsa suscipit magni commodi ad facilis quidem enim doloremque cum! Earum, tempore!
                        ad facilis quidem enim doloremque cum! Earum, tempore! ad facilis quidem enim doloremque cum! Earum, tempore!</p>
                        </div>
                        <img src={img4} alt=""/>
                        
                    </div>
                </div>

                <div class="categorie">
                    <h1 className='titre_home'> Categorie </h1>
                    <div class="cards">
                        <Cartecat/>
                        <Cartecat/>
                        <Cartecat/>
                    </div>
                </div>
                
                <div class="conseil">
                    <h1 className='titre_home'> Conseil de jour</h1>
                    <div class="jour">
                        <div class="text">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, 
                                ullam tenetur porro perspiciatis hic assumenda error expedita atque
                                harum eius provident sapiente earum,
                                incidunt excepturi sit officia, ipsum magnam accusantium!</p>
                        </div>
                    <div class="img"></div>
                    </div>
                </div>

        </div>

        <Footer/>

    </div>
    
    )
}