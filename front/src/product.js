
import Carte from "./compenents/carte" ;
import Footer from "./compenents/footer";
import img from "./images/arrow_forward.png"
import { useState } from "react";
import './css/product.css'

export default function Product() {
    const [showMore, setShowMore] = useState(true);
    const [state,setState] = useState({x:4 , x1:4})
    const products = Array.from({ length: 12 }, (_, index) => <Carte key={index} />);
    const displayedProducts = products.slice(0, state.x);
     
    const [showMore1, setShowMore1] = useState(true);
    const products1 = Array.from({ length: 12 }, (_, index1) => <Carte key={index1} />);
    const displayedProducts1 = products1.slice(0, state.x1);

    function changeX() {
        setShowMore(prevShowMore => !prevShowMore);
        setState(prevState => ({ ...prevState, x: showMore ? products.length : 4 }));
    }

    function changeX1() {
        setShowMore1(prevShowMore1 => !prevShowMore1);
        setState(prevState => ({ ...prevState, x1: showMore1 ? products1.length : 4 }));
    }


    return (
    <div>

    <header>
        <h1> Men</h1>
                <div class="circle circle1"></div>
                <div class="circle circle2"></div>
                <div class="circle circle3"></div>
                <div class="circle circle4"></div>
        </header>
    <div class="main">
        <div class="women_collection">
            <h1 className="product_women" > Womens collection</h1>
        
        <div class="cards">
            {displayedProducts}
        </div>
        <button onClick={changeX}>{showMore ? 'Show More' : 'Show Less'} <img src={img} alt=""/></button>
        
        </div>

        <div class="women_collection">
            <h1 className="product_women">shoes collection</h1>
    
        <div class="cards">
            {displayedProducts1}
        </div>
        <button onClick={changeX1}> {showMore1 ? 'Show More' : 'Show Less'} <img src={img} alt=""/></button>
    </div>
    </div>
    <Footer/>
    </div>
    )
}