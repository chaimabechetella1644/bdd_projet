
import { BrowserRouter, Link , Route,Routes,NavLink, Router,Switch, useLocation } from 'react-router-dom';
import google from './images/Google.png'
import Navbar from './compenents/navbar';
import "./css/login.css"

export default function Login() {
    return(
        <div className='login'>
            <Navbar/>

            <div className='form'>
                <h1> log in</h1>
                <form>
                    <input type='email' name='eamil' placeholder='email'/>
                    <input type='password' name='password' placeholder='password'/>
                    
                </form>
                <button className='create'> create accont</button>
                
                    <p>
                        Don’t have an account? <NavLink to="/compte"> create account</NavLink>
                    </p>
                <hr/>
                <button className='google'> <img src={google} alt=''/> <p> login with google</p> </button>
            </div>
            <div class="circle circle1"></div>
                <div class="circle circle2"></div>
                <div class="circle circle3"></div>
                <div class="circle circle4"></div>
        </div>
    )
}