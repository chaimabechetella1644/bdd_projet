


import { NavLink } from 'react-router-dom';
import Slidebar from '../compenents/slidebar';
import Head from '../compenents/head';
import logo from '../images/Group 1.png'
import profil from '../images/profil.png'
import '../css/admin.css'
import { useRef } from 'react';


export default function ProductAd() {

    const ele1ref = useRef(null) ;
    const change = () => {
        ele1ref.current.style.display = "flex" ;
    }


    return (

    <div class="page">
            <Slidebar/>

        <div class="content">
            <Head/>
            <h1 class="p-relative">Product</h1>
            <div class="projects">
                
                <div class="responsive-table">
                    <table>
                        
                        <thead>
                            <tr>
                                <td>Nom du produit </td>
                                <td>Identifiant de suivi</td>
                                <td>Prix (Da)</td>
                            </tr>
                        </thead>
                        
                        <tbody>
                            
                            <tr>
                                <td>Arbre de pomme</td>
                                <td>100056</td>
                                <td>1200.00</td>
                                
                            </tr>

                            
                           
                            <tr>
                                <td>Arbre de pomme</td>
                                <td>100056</td>
                                <td>1200.00</td>
                                
                            </tr>

                            
                            
                            <tr>
                                <td>Arbre de pomme</td>
                                <td>100056</td>
                                <td>1200.00</td>
                                
                            </tr>

                            
                           
                            <tr>
                                <td>Arbre de pomme</td>
                                <td>100056</td>
                                <td>1200.00</td>
                                
                            </tr>

                            
                            
                            <tr>
                                <td>Arbre de pomme</td>
                                <td>100056</td>
                                <td>1200.00</td>
                                
                            </tr>

                            
                            
                            
                            




                        </tbody>
                       
                    </table>
                </div>
            </div>
            <button onClick={change}> add product</button>
            
            <div class="form1" ref={ele1ref} >
            <h2> add product</h2>
            <label for="name"> name : </label>
            <input type="text" id=''  name='name'/>
            <label for='category'> category :</label>
            <input type='text' id='category' name='information'/>
            <label for='gender'> gender :</label>
            <input type='text' id='gender' name='information'/>
            <label for='description'> description :</label>
            <input type='text' id='description' name='information'/>
            <label for='size'> size :</label>
            <input type='text' id='size' name='information'/>
            <label for='color'> color :</label>
            <input type='text' id='color' name='information'/>
            <label for='price'> price(Da):</label>
            <input type='text' id='price' name='information'/>

            <label for="image" className='custom-file-upload'> add picture </label>
            <input type="file" id="image" name="image1" accept="image/*" required></input>

            <button>Ajouter</button>
                         
        </div>



        </div>

        
    </div>
)}