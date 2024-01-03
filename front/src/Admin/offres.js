
import { NavLink } from 'react-router-dom';
import Slidebar from '../compenents/slidebar';
import Head from '../compenents/head';
import logo from '../images/Group 1.png';
import profil from '../images/profil.png';
import '../css/admin.css';
import multi from '../images/signe-de-multiplication.png' 
import React ,{ useRef , useState, useEffect } from 'react';
import axios from 'axios';


export default function Offres() {

    const ele1ref = useRef(null) ;
    const change = () => {
        ele1ref.current.style.display = "flex" ;
    }   

   
    const [name, setName] = useState('') ;
    const [information, setInformation] = useState('');
    const [image, setImage] = useState('');
    const [offreList, setoffresList] = useState([]);

    const ajouterOffre = () => {
        const formdata = new FormData();
        formdata.append('image', image);
        formdata.append('name_offres', name);
        formdata.append('information', information);
        
        axios.post('http://localhost:7000/offre/insert', formdata).then( () => {
            alert("successful insert");
          });  
    }

    useEffect( () => {
        axios.get('http://localhost:7000/offre/select').then( (response) => {
          setoffresList(response.data)
          console.log(response.data)
        } ).catch(error => {
            console.error('Error fetching offers:', error);
        });
      }, [])

     const deleteoffre = (rev) => {
            axios.delete(`http://localhost:7000/offre/delete/${rev}`).then(response => {
                console.log(response);
                
            })
            .catch(error => {
                console.error('Error deleting offer:', error);
            });
     }

    return (
            <div class="page">

                <Slidebar/>
            <div class="content">
   
                 <Head/>
                <h1 class="p-relative">Offres</h1>
                <div class="offres" >
                {offreList.map( (val) => 
                    <div class="content">
                        <i class="fa-regular fa-square-check"></i>
                        <div class="info">
                            <h3>{val.name_offres}</h3>
                            <p> {val.information} </p>
                        </div> 
                        <div class="icons">
                            <a type='submit' onClick={() => deleteoffre(val.offre_id)} href="" ><img src={multi} alt='image'/></a>
                            
                        </div>
                    </div>
                    )}
                    <button onClick={change}> add offre</button>
                    </div>

                    <div class="form1" ref={ele1ref} >
                        <h2> ajouter un offre</h2>
                        <label for="name"> offre title : </label>
                        <input type="text" id=''  name='name' onChange={ (e) => {setName(e.target.value)}} required/>

                        <label for='information'> offre infotmattion :</label>
                        <input type='text' id='information' name='information' onChange={ (e) => {setInformation(e.target.value)}} required/>

                        <label for="image" className='custom-file-upload'> add picture</label>
                        <input type="file" id="image" name="image1" accept="image/*"  onChange={ (e) => {setImage(e.target.files[0])}} required></input>

                        <button onClick={ajouterOffre}>Ajouter</button>
                         
                    </div>
                    
                    
                



            </div>




            </div>
    )
}