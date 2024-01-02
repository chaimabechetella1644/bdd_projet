


import { NavLink } from 'react-router-dom';
import Slidebar from '../compenents/slidebar';
import Head from '../compenents/head';
import suppr from '../images/signe-de-multiplication.png' ;
import '../css/admin.css';
import { useRef, useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';


export default function ProductAd() {

    const ele1ref = useRef(null) ;
    const change = () => {
        ele1ref.current.style.display = "flex" ;
    }

    const [name, setName] = useState('') ;
    const [category, setCategory] = useState('') ;
    const [gender, setGender] = useState('');
    const [discreption, setDiscreption] = useState('');
    const [size, setSize] = useState('');
    const [color, setColor] = useState('');
    const [price, setPrice] = useState('');
    const [picture, setPicture] = useState('');
    const [productList, setProductList] = useState([]);


    const submitProduct = () => {
        const formdata = new FormData();
        formdata.append('image', picture);
        formdata.append('product_name', name);
        formdata.append('categorie', category);
        formdata.append('gender', gender);
        formdata.append('description', discreption);
        formdata.append('size', size);
        formdata.append('color', color);
        formdata.append('price', price);
        axios.post("http://localhost:7000/product/insert", formdata).then( () => {
            alert("successful insert");
          }).catch(error => {
            console.error('Error fetching offers:', error);
        });
    }

    useEffect( () => {
        axios.get('http://localhost:7000/product/select').then( (response) => {
          setProductList(response.data)
          
        } )
      })
      

    //   const dispatch1 = useDispatch();

    //   useEffect(() => {
    //     axios.get('http://localhost:7000/product/select').then((response) => {
    //       dispatch1({ type: 'SET_PRODUCTS', payload: response.data });
    //       console.log(response.data);
    //     });
    //   }, [dispatch1]);




      const deleteProduct = (rev) => {
        axios.delete(`http://localhost:7000/product/delete/${rev}`)
    }


    const dispatch = useDispatch();

        useEffect(() => {
            axios.get('http://localhost:7000/categories/select').then((response) => {
            dispatch({ type: 'SET_CATEGORIES', payload: response.data });
            console.log(response.data);
            });
        }, [dispatch]);

    const categorieList = useSelector((state) => state.categorieList);


    return (

    <div class="page">
            <Slidebar/>

        <div class="content">
            <Head/>
            <h1 class="p-relative">Product</h1>
            <div class="projects">
                
                <div class="responsive-table">
                    <table>
                        
                        <thead>
                            <tr>
                                <td>Nom du produit </td>
                                <td>Identifiant de suivi</td>
                                <td>Prix (Da)</td>
                                <td></td>
                            </tr>
                        </thead>
                        
                        <tbody>
                        {productList.map( (val) => {
                            return(
                            <tr>
                                <td>{val.product_name}</td>
                                <td>{val.product_id}</td>
                                <td>{val.price}</td>
                                <td type="submit" className='deleteImg'> <button onClick={ () => {deleteProduct(val.product_id)}}> <img src={suppr} alt='image'/> </button></td>
   
                            </tr>
                            )
                        })}
                        </tbody>
                       
                    </table>
                </div>
            </div>
            <button onClick={change}> add product</button>
            
            <div class="form1" ref={ele1ref} >
            <h2> add product</h2>
            <label for="name"> name : </label>
            <input type="text" id=''  name='name' onChange={ (e) => setName(e.target.value)} required/>
            <label for='category'> category :</label>
            <select id="category" onChange={(e) => setCategory(e.target.value)} value={category}>
            {categorieList.map((val) => {
                  console.log('Category value:', val.categories_name);
                return(
                <option  value={val.categories_name}>
                {val.categories_name}
                </option>
                )
            })}
            </select>
            <label for='gender'> gender :</label>
            <select id="gender" onChange={(e) => setGender(e.target.value)} value={gender}>
                <option value="">Select gender</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="machine">Machine</option>
            </select>
            <label for='description'> description :</label>
            <input type='text' id='description' name='information' onChange={ (e) => setDiscreption(e.target.value)} required/>
            <label for='size'> size :</label>
            <input type='text' id='size' name='information' onChange={ (e) => setSize(e.target.value)} required/>
            <label for='color'> color :</label>
            <input type='text' id='color' name='information' onChange={ (e) => setColor(e.target.value)} required/>
            <label for='price'> price(Da):</label>
            <input type='text' id='price' name='information' onChange={ (e) => setPrice(e.target.value)} required/>

            <label for="image" className='custom-file-upload' > add picture </label>
            <input type="file" id="image" name="image1" accept="image/*" onChange={ (e) => setPicture(e.target.files[0])} required></input>

            <button onClick={submitProduct}>Ajouter</button>
                         
        </div>
        </div> 
    </div>
)}