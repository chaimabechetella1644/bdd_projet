
import { NavLink } from "react-router-dom"

export default function Slidebar() {
     return (
        <div class="sidebar" >
            <h3>dashbaord</h3>
            
            <ul>
                <li> <NavLink to="/profil"> profil </NavLink> </li>

                <li> <NavLink to="/offre"> Offres </NavLink> </li>

                <li> <NavLink to="/commande"> Commandes </NavLink> </li>

                <li> <NavLink to="/produitadmin"> Product </NavLink> </li>

                <li> <NavLink to="/categoriesadmin"> categories </NavLink> </li>

                
            </ul>

        </div>
     )
}