
import img1 from '../images/stepper_salle-de-sport-bordeaux-removebg-preview (3).png' ;
import "../css/home.css"


export default  function Cartecat() {
    return(
        
        <div class="card">
            <div class="img">
            <img src={img1} alt=""/>
            </div>
            <div class="text">
                <p class="p"> Machine</p>
            </div>
        </div>
        
    )
}