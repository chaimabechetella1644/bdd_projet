import image1 from '../images/stepper_salle-de-sport-bordeaux-removebg-preview (3).png'
import image2 from '../images/croix-medicale.png'
import image3 from '../images/operations-de-calcul-signe-moins.png'
import image4 from '../images/59-Garbage.png'
import '../css/panier.css'
import { useState } from 'react'

export default function CartePanier() {
    const [state,setState] = useState({x:0 , prix:150 })
    const x = state.x
    const prix = state.prix
    

    function incriment() {
        setState(prevState => ({ ...prevState, x: x+1}));
    }
    function decriment() {
        setState(prevState => ({
          ...prevState,
          x: prevState.x > 0 ? prevState.x - 1 : 0
        }));
      }

    return(
        <div className="card">
                        <p className="titre"> Vital Seamless</p>
                        <div className="img"> <img src={image1} alt=""/></div>
                        <p className="prix"> Prix :<span> {prix}$</span> </p>
                        <div className='quantite'>
                            <p> Quantite :</p>
                            <button className='image' onClick={incriment}><img src={image2} alt=''/></button>
                            <p className='inc'>{x}</p>
                            <button className='image' onClick={decriment}><img src={image3} alt=''/></button>
                        </div>
                        <p className="prix"> prix totale : {prix * x} $ </p>
                        <button className='buy'> <img src={image4} alt=''/> <p>Delete</p></button>

        </div>
    )
}