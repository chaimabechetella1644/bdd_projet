
import { NavLink } from 'react-router-dom';
import Slidebar from '../compenents/slidebar';
import Head from '../compenents/head';
import logo from '../images/Group 1.png';
import profil from '../images/profil.png';
import '../css/admin.css';
import multi from '../images/signe-de-multiplication.png' 
import React ,{ useRef } from 'react';



export default function Offres() {

    const ele1ref = useRef(null) ;
    const change = () => {
        ele1ref.current.style.display = "flex" ;
    }
    return (
            <div class="page">

                <Slidebar/>
            <div class="content">
   
                 <Head/>
                <h1 class="p-relative">Offres</h1>
                <div class="offres" >

                    <div class="content">
                        <i class="fa-regular fa-square-check"></i>
                        <div class="info">
                            <h3>Packaging Tools</h3>
                            <h4>Gift boxex</h4>
                            <p>Réduction : 20% </p>
                            <p>durée : 03 jours </p>
                        </div> 
                        <div class="icons">
                            <a href="" ><img src={multi} alt='image'/></a>
                            
                        </div>
                    </div>

                    <div class="content">
                        <i class="fa-regular fa-square-check"></i>
                        <div class="info">
                            <h3>Livraison Gratuite</h3>
                            <h4>Journée Mondiale de l'arbre</h4>
                            <p>Réduction : 10% + Livraison gratuite </p>
                            <p>durée : une journée | 23 Avril 2023 </p>
                        </div> 
                        <div class="icons">
                            <a href="" ><img src={multi} alt='image'/></a>
                            
                        </div>
                    </div>

                    <button onClick={change}> add offre</button>
                    </div>

                    <div class="form1" ref={ele1ref} >
                        <h2> ajouter un offre</h2>
                        <label for="name"> offre title : </label>
                        <input type="text" id=''  name='name'/>

                        <label for='information'> offre infotmattion :</label>
                        <input type='text' id='information' name='information'/>

                        <label for="image" className='custom-file-upload'> add picture</label>
                        <input type="file" id="image" name="image1" accept="image/*" required></input>

                        <button>Ajouter</button>
                         
                    </div>
                    
                    
                



            </div>




            </div>
    )
}