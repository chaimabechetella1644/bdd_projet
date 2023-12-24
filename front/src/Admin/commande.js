
import { NavLink } from 'react-router-dom';
import Slidebar from '../compenents/slidebar';
import Head from '../compenents/head';
import logo from '../images/Group 1.png'
import profil from '../images/profil.png'
import '../css/admin.css'


export default function Commande() {
    return (

    <div class="page">
        <Slidebar/>

        <div class="content">
            <Head/>
            <h1 class="p-relative">Cammande</h1>
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