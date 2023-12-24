import { NavLink } from 'react-router-dom';
import Slidebar from '../compenents/slidebar';
import Head from '../compenents/head';
import logo from '../images/Group 1.png';
import profil from '../images/profil.png';
import '../css/admin.css'


export default function Admin() {
    return (

    <div class="page">
        <Slidebar/>
        <div class="content">
    
            <Head/>
            
            <h1 class="p-relative">Tableau de board</h1>

            <div class="wrapper">
                
                <div class="box">
                    <div class="header comm">
                        <i class="fa-solid fa-cart-plus"></i>
                    </div>
                    <h4>Commandes</h4>
                    <span>10</span>
                    <div class="info">
                        <i class="fa-solid fa-cart-plus comm"></i>
                        <p>Totale des commandes</p>
                    </div>
                </div>

                <div class="box">
                    <div class="header prod">
                        <i class="fa-sharp fa-solid fa-bag-shopping prod"></i>
                    </div>
                    <h4>Produits</h4>
                    <span>1250</span>
                    <div class="info">
                        <i class="fa-sharp fa-solid fa-bag-shopping prod"></i>
                        <p>Totale des produits</p>
                    </div>
                </div>

                <div class="box">
                    <div class="header cat">
                        <i class="fa-solid fa-list-check cat"></i>
                    </div>
                    <h4>Catégories</h4>
                    <span>6</span>
                    <div class="info">
                        <i class="fa-solid fa-list-check cat"></i>
                        <p>Totale des catégories</p>
                    </div>
                </div>

            </div>

            <div class="head-list">
                <h4>Infos :</h4>
                <a class="active" href="index.html">
                    <i class="fa-solid fa-cart-plus"></i>
                    <span>10 derniere commandes</span>
                </a>
                <a class="" href="Stats.html">
                    <i class="fa-solid fa-user-clock"></i>
                    <span>Statistiques du magasin</span>
                </a>
                <a class="" href="OffresDispo.html">
                    <i class="fa-regular fa-rectangle-list"></i>
                    <span>Offres disponibles</span>
                </a>
            </div>

            <div class="projects">
                
                <div class="responsive-table">
                    <table>
                        
                        <thead>
                            <tr>
                                <td>Nom du produit </td>
                                <td>Identifiant de suivi</td>
                                <td>Prix (Da)</td>
                                <td>Date et heure</td>
                                <td>Statut</td>
                            </tr>
                        </thead>
                        
                        <tbody>
                            
                            <tr>
                                <td>Arbre de pomme</td>
                                <td>100056</td>
                                <td>1200.00</td>
                                <td>30/03/2023 | 21:25</td>
                                <td class="livré"><span>livré</span></td>
                            </tr>

                            
                           
                            <tr>
                                <td>Arbre de pomme</td>
                                <td>100056</td>
                                <td>1200.00</td>
                                <td>30/03/2023 | 21:25</td>
                                <td class="attente"><span>En attente</span></td>
                            </tr>

                            
                            
                            <tr>
                                <td>Arbre de pomme</td>
                                <td>100056</td>
                                <td>1200.00</td>
                                <td>30/03/2023 | 21:25</td>
                                <td class="approuvé"><span>Approuvé</span></td>
                            </tr>

                            
                           
                            <tr>
                                <td>Arbre de pomme</td>
                                <td>100056</td>
                                <td>1200.00</td>
                                <td>30/03/2023 | 21:25</td>
                                <td class="refusé"><span>Refusé</span></td>
                            </tr>

                            
                            
                            <tr>
                                <td>Arbre de pomme</td>
                                <td>100056</td>
                                <td>1200.00</td>
                                <td>30/03/2023 | 21:25</td>
                                <td class="refusé"><span>Refusé</span></td>
                            </tr>

                            
                            
                            
                            




                        </tbody>
                       
                    </table>
                </div>
            </div>
            



        </div>
    </div>
)}