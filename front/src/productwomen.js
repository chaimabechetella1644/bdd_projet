
import Carte from "./compenents/carte" ;
import Footer from "./compenents/footer";
import img from "./images/arrow_forward.png"
import { useState , useEffect} from "react";
import Navbar from './compenents/navbar';
import axios from "axios";
import './css/product.css'

export default function ProductW() {
    const [showMore, setShowMore] = useState(true);
    const [state,setState] = useState({x:8 , x1:8})
    const products = Array.from({ length: 12 }, (_, index) => <Carte key={index} />);
    const displayedProducts = products.slice(0, state.x);
     
    const [showMore1, setShowMore1] = useState(true);
    const products1 = Array.from({ length: 12 }, (_, index1) => <Carte key={index1} />);
    const displayedProducts1 = products1.slice(0, state.x1);

    function changeX() {
        setShowMore(prevShowMore => !prevShowMore);
        setState(prevState => ({ ...prevState, x: showMore ? products.length : 8 }));
    }

    function changeX1() {
        setShowMore1(prevShowMore1 => !prevShowMore1);
        setState(prevState => ({ ...prevState, x1: showMore1 ? products1.length : 8 }));
    }




    const [productList, setProductList] = useState([]);
    const [productList1, setProductList1] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:7000/product/select');
            if (response.data) {
              setProductList(response.data.filter(product => product.categorie === "sportswear" && product.gender === "men"));
              setProductList1(response.data.filter(product => product.categorie === "sportswear" && product.gender === "women"));

            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);




    return (
    <div>
        <Navbar/>
    <header>
        <h1> Women</h1>
                <div class="circle circle1"></div>
                <div class="circle circle2"></div>
                <div class="circle circle3"></div>
                <div class="circle circle4"></div>
        </header>
    <div class="main">
        <div class="women_collection">
            <h1 className="product_women" > Womens sportswear</h1>
        
        <div class="cards">
        {productList1.slice(0, state.x).map(product => (
           
           <Carte product={product} />
         
         ))}
        </div>
        <button onClick={changeX}>{showMore ? 'Show More' : 'Show Less'} <img src={img} alt=""/></button>
        
        </div>

        <div class="women_collection">
            <h1 className="product_women">men sportswear</h1>
    
        <div class="cards">
        {productList.slice(0, state.x).map(product => (
           
           <Carte product={product} />
         
         ))}
        </div>
        <button onClick={changeX1}> {showMore1 ? 'Show More' : 'Show Less'} <img src={img} alt=""/></button>
    </div>
    </div>
    <Footer/>
    </div>
    )
}