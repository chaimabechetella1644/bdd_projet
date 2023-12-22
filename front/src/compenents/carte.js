
import image from '../images/stepper_salle-de-sport-bordeaux-removebg-preview (3).png'
import img1 from  '../images/vectorOrange.png'
import img2 from '../images/Vectoror.png'
import '../css/home.css'


export default function Carte() {
    return(
        <div className="card">
            <div class="img">
            <img src= {image} alt=""/>
            </div>
            <div class="text">
                <p class="p"> Machine</p>
                <div class="price">
                    <p>56.00 $</p>
                    <div class="img">
                    <img src={img1} alt=""/>
                    <img src={img2} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}