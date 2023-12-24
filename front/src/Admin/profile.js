
import { NavLink } from 'react-router-dom';
import { useRef } from 'react';
import Slidebar from '../compenents/slidebar';
import Head from '../compenents/head';
import logo from '../images/Group 1.png';
import profil from '../images/profil.png';
import photo from '../images/30618876-portrait-d-un-bel-homme-latin-avec-une-expression-sérieuse.jpg'
import '../css/admin.css'


export default function Profil() {

    const ele1ref = useRef(null) ;
    const change = () => {
        ele1ref.current.style.display = "flex" ;
    }
    return(
        <div className='profill'>
         <div className="page">
            <Slidebar/>
                <div class="content">
                <Head/>
            
                <h1 class="p-relative">Profil</h1>

                <div className='prof'>
        
         <div className="information">
                <div className='img'>
                    <img src={photo} alt='profil'/>
                </div>
                <div className='text'>
                    <div>
                        <h5> name :</h5>
                        <p> bouhafs imane</p>
                    </div>
                    <div>
                        <h5> age :</h5>
                        <p> 20</p>
                    </div>
                    <div>
                        <h5> sex :</h5>
                        <p> femme</p>
                    </div>
                    <div>
                        <h5> Email :</h5>
                        <p> i_bouhafs@estin.dz</p>
                    </div>
                    <div>
                        <h5> numero de telephne :</h5>
                        <p> 0662695753</p>
                    </div>
                </div>
                <button onClick={change}> modifier les information</button>
                </div>
                
            </div>

            <div class="form1" ref={ele1ref} >
            <h2> ajouter des information</h2>
            <label for="name"> name : </label>
            <input type="text" id='name'  name='name' required/>
            <label for='information'> age :</label>
            <input type='number' id='information' name='information' required/>
            <label for='sex'> sex :</label>
            <select id="sex" name="fruit">
                <option value="men">men</option>
                <option value="women">women</option>
                
            </select>

            <label for='date'> Email</label>
            <input type='email' id='date' name='date' required/>

            <label for="image" class="custom-file-upload"> add picture</label>
            <input type="file" id="image" name="image1" accept="image/*" required></input>

            <button>Ajouter</button>
                         
        </div>

            </div>

        
            </div>
         </div>
    )
}