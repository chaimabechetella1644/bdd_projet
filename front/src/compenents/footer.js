import twitter from '../images/Vectortwitter.png'
import youtube from '../images/Vectortwitter.png'
import img1 from '../images/Vectorwats.png'
import img2 from '../images/Vectorlocalisation.png'
import img3 from '../images/Vectortime.png'
import img4 from '../images/Vectortime.png'


export default function Footer() {
    return(
        <footer>
            <div class="container">

                <div class="box">
                    <h3>ATHLETES</h3>
                    <ul class="social">
                        <li>
                            <a href="#" class="facebook" onclick="goToFacebook()">
                                <img class="fab fa-facebook-f" src={img1}></img>
                            </a>
                            
                        </li>
                        <li>
                            <a href="#" class="twitter">
                                <img class="fab fa-twitter" src={twitter}></img>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="youtube">
                                <img class="fab fa-youtube" src={youtube}></img>
                            </a>
                        </li>
                    </ul>
                    <div class="text">
                        <p>
                            Lorem ipsum, dolor sit amet
                            consectetur adipisicing elit.
                            Temporibus nulla rem, dignissimos
                            iste aspernatur
                        </p>
                    </div>
                    
                </div>

                <div class="box">
                    <ul class="links">
                        <li><a href="#">Important link 1</a></li>
                        <li><a href="#">Important link 2</a></li>
                        <li><a href="#">Important link 3</a></li>
                        <li><a href="#">Important link 4</a></li>
                        <li><a href="#">Important link 5</a></li>
                    </ul>
                </div>

                <div class="box">
                    <div class="line">
                        <img class="fa-solid fa-location-dot" src={img2}/>
                        <div class="infos">Algeria , Bejaia , Amizour Rn 07 </div>
                    </div>
                    <div class="line">
                        <img class="fa-regular fa-clock" src={img3}></img>
                        <div class="infos">Business hours : from 08:00 to 00:00</div>
                    </div>
                    <div class="line">
                        <img class="fa-solid fa-phone" src={img4}></img>
                        <div class="infos">
                            <span>+213066666666</span> 
                            <span>+032726896</span> 
                            
                        </div>
                    </div>
                </div>
            </div>
            <p class="copyright">Made With Love imane and chaima</p>
    </footer>
    )
}