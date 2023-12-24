
import CartePanier from './compenents/cartePanier'
import Footer from './compenents/footer'
import { useRef } from 'react';
import Navbar from './compenents/navbar';
import './css/panier.css'

export default function Panier() {
    const ele1ref = useRef(null);
    const ele2ref = useRef(null);
    
     const transforme = () => {
            ele1ref.current.style.display = "flex";
            ele2ref.current.style.opacity = "0.5"

     } 

     const inhiret = () => {
        ele1ref.current.style.display = "none";
      
 } 
      
    
    return (
        <div className="Panier">
            <Navbar/>

            <div ref={ele2ref} id='page'>
            <div className="page2">
                <h1> Panier</h1>
                <div className="cards">
                    <CartePanier/>
                    <CartePanier/>
                    <CartePanier/>
                    <CartePanier/>
                    <CartePanier/>
                    <CartePanier/>
                    <CartePanier/>
                    <CartePanier/>
                </div>

                <div class="circle circle1"></div>
                <div class="circle circle2"></div>
                <div class="circle circle4"></div>

            </div>

            <button onClick={transforme} className='acheter'> buy </button>
            </div>
              <div className='newadress' ref={ele1ref}>
                    <h1> ajouter une nouvelle adresse</h1>
                    <form>
                        <h3> country <span> * </span></h3>
                        <input className='country' type='text' name='country' placeholder='Algerie'/>

                        <div className='information'>
                        <h3>personnal information <span> * </span></h3>
                        <input type='text' name='nomContact' placeholder='Contact name'/>
                        <input type='number' name='numTlfn' placeholder='phone number'/>    
                        </div>

                        <div className='adresse'>
                            <h3>adress <span> * </span> </h3>
                            <input className='Rue' type='text' name='adress' placeholder='Rue, maison/appartement/logement'/>
                            <input type='text' name='Province' placeholder='Province'/>
                            <input type='text' name='code' placeholder='Code postal'/>


                        </div>
                        <div className='button'>
                            <button className='button1'> confirmer</button>
                            <button className='button2' onClick={inhiret} > anuller</button>
                        </div>


                    </form>

              </div>








            <Footer/>


        </div>



    )
}