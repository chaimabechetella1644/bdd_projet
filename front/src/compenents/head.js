
import logo from '../images/Group 1.png'
import profil from '../images/profil.png'


export default function Head() {
    return (
        <div class="head">
                    <img src={logo} alt='logo' className='img'/>
                <div class="icons">
                        <img src={profil} alt="Photo de profil" id="photo-profil"/>
                        <div class="second">
                            <h4>Nom et prénom</h4>
                            <p>Super Administrateur</p>
                        </div>
                                            
                </div>
            </div>
    )
}