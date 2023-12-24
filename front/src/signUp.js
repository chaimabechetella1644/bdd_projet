
import { useState } from 'react';
import './css/signUp.css'
import google from "./images/Google.png"
import Login from './login';
import Navbar from './compenents/navbar';
import { BrowserRouter, Link , Route,Routes,NavLink, Router,Switch, useLocation } from 'react-router-dom';
import { useRef } from 'react';



export default function Signup() {
    const [champValue1,setchampValue1] = useState('') ;
    const [champValue2,setchampValue2] = useState('') ;
    const [champValue3,setchampValue3] = useState('') ;
    const [isError,setError] = useState(false)
    const ele1ref = useRef(true);
    const ele2ref = useRef(true);
    const ele3ref = useRef(true);

    const testerleform = () => {
        if(champValue1.trim() === "") {
            ele1ref.current.style.border = "1px solid red"
            setError(false)
        }
        else{
            setError(true)
        }
        
        if(champValue2.trim() === "") {
            ele2ref.current.style.border = "1px solid red"
            
        }

        if(champValue3.trim() === "" || champValue3.trim().length < 6) {
            ele3ref.current.style.border = "1px solid red"
        }
        }

    return(
        <div className='signUp'>
            <Navbar/>

            <div className='form' >
                <h1> create accont</h1>
                <form onSubmit={testerleform}>
                    
                    <input type='text' ref={ele1ref} name='name' value={champValue1}  onChange={(e)=> setchampValue1(e.target.value)} placeholder={isError ? 'Error: Name required' : "name complet"}/>
                    <input type='email' ref={ele2ref} name='eamil' value2={champValue2}  onChange={(e)=> setchampValue2(e.target.value)} placeholder='email'/>
                    <input type='password' ref={ele3ref} name='password' value3={champValue3}  onChange={(e)=> setchampValue3(e.target.value)} placeholder='password'/>
                    
                
                <button className='create' type='submit'> create accont</button>
                </form>
                    <p>
                    Already have an account? <NavLink to="/login">Log In</NavLink>
                    </p>
                <hr/>
                <button className='google'> <img src={google} alt=''/> <p> sign up with google</p> </button>
            </div>
            <div class="circle circle1"></div>
                <div class="circle circle2"></div>
                <div class="circle circle3"></div>
                <div class="circle circle4"></div>
        </div>
    )
}
