

import '../css/admin.css';
import suppr from '../images/signe-de-multiplication.png' ;
import { useRef, useState , useEffect } from 'react';
import Slidebar from '../compenents/slidebar';
import Head from '../compenents/head';
import axios from 'axios' ;
import { useDispatch ,useSelector} from 'react-redux';

export default function CategorieiAd() {

    const ele1ref = useRef(null) ;
    const change = () => {
        ele1ref.current.style.display = "flex" ;
    }

    const [name, setName] = useState('') ;
    const [number, setNumber] = useState('') ;
    const [date, setDate] = useState('');
    const [image, setImage] = useState('');
    // const [categorieList, setCategorieList] = useState([]);

    const submitCategories = () => {
        axios.post("http://localhost:7000/categories/insert", {categories_name: name , num_product:number, date_start:date, image_path: image}).then( () => {
            alert("successful insert");
          });  
    }

    const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:7000/categories/select').then((response) => {
      dispatch({ type: 'SET_CATEGORIES', payload: response.data });
      console.log(response.data);
    });
  }, [dispatch]);

  const categorieList = useSelector((state) => state.categorieList);



    const deleteCategorie = (rev) => {
        axios.delete(`http://localhost:7000/categories/delete/${rev}`)
    }



    return (

    <div class="page">
        <Slidebar/>
        <div class="content">
            <Head/>
            
            
            <h1 class="p-relative">Categories</h1>
            <div class="projects">
                
                <div class="responsive-table">
                    <table>
                        
                        <thead>
                            <tr>
                                <td>Nom du categorie </td>
                                <td>nombre de produit</td>
                                <td>date d'ajout</td>
                                <td></td>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {categorieList.map( (val) => {
                                return (
                                <tr>
                                <td>{val.categories_name}</td>
                                <td> {val.num_product}</td>
                                <td> {val.date_start} </td>
                                <td type="submit" className='deleteImg'> <button onClick={ () => {deleteCategorie(val.categories_name)}}> <img src={suppr} alt='image'/> </button></td>
                                </tr> )
                            }) }

                        </tbody>
                       
                    </table>
                </div>
                
            </div>
            <button onClick={change}> add categorie</button>
            
            <div class="form1" ref={ele1ref} >
            <h2> ajouter une categorie</h2>
            <label for="name"> name : </label>
            <input type="text" id='name'  name='name' onChange={ (e) => setName(e.target.value)} required/>
            <label for='information'> nombre de produit :</label>
            <input type='number' id='information' name='information' onChange={ (e) => { setNumber(e.target.value)}} required/>
            <label for='date'> date d'ajout :</label>
            <input type='date' id='' name='date' onChange={ (e) => { setDate(e.target.value)}} required/>

            <label for="image" className='custom-file-upload'> add picture</label>
            <input type="file" id="image" name="image1" accept="image/*"  onChange={ (e) => { setImage(e.target.value)}} required></input>

            <button onClick={submitCategories}>Ajouter</button>
                         
        </div>



        </div>

        
    </div>
)}