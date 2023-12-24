
import image12 from "./images/Rectangle 17.png"
import Carte from "./compenents/carte"
import './css/myproduct.css'
import './css/home.css'
import Navbar from './compenents/navbar';
import Footer from './compenents/footer'

export default function MyProduct() {
    return (
        <div>
            <Navbar/>
            <div className="produit">
                <h1> Vital Seamless </h1>
                <div className="info">
                <div className="left">
                    <img src={image12} alt=""/>
                </div>
                <div className="right">
                     <h3> description</h3>
                     <p>Lorem ipsum dolor sit amet consectetueLorem ipsum dolor sit amet consectetueLorem ipsum dolor sit amet consectetue </p>
                     <h3> select color </h3>
                     <div className="color">
                        <div className="color1"></div>
                        <div className="color2"></div>
                        <div className="color3"></div>
                        <div className="color4"></div>
                    
                     </div>
                     <h3> select size </h3>
                     <div className="size">
                        <div className="size1">10</div>
                        <div className="size2">10</div>
                        <div className="size3">10</div>
                        <div className="size1">10</div>
                    
                     </div>
                     <div className="button">
                        <button className="button1"> add to wish list</button>
                        <button className="button2"> add to panier</button>
                     </div>

                </div>


            </div>
            <div class="circle circle1"></div>
            <div class="circle circle3"></div>
            <div class="circle circle4"></div>

            </div>

            <div class="Product">
                    <h1 className='titre_home'> other products </h1>
                    <div className='container'>
                        <div class="cards">
                            <Carte/>
                            <Carte/>
                            <Carte/>
                            <Carte/>
                            <Carte/>
                            <Carte/>
                            <Carte/>
                            
                        </div>
                    </div>
            </div>
            <Footer/>

        </div>




    )
}