import Header from "../Header/Header";
import "./Hero.css";
import hero_imagen from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";


const Hero = () => {
    return (
        <div className="hero">
            <div className="left-h">
                <Header />

                <div className="the-best-ad">
                    <div></div>
                    <span>The best fitness club in the town</span>
                </div>
                {/*hero*/}
                <div className="hero-text">
                    <div>
                        <span className="stroke-text">Moldea </span>
                        <span>tu</span>
                    </div>
                    <div>
                        <span>Cuerpo ideal</span>
                    </div>
                    <div>
                        <span>
                            Aqui te ayudaremos a moldear y construir tu cuerpo ideal y vivir tu vida al maximo
                        </span>
                    </div>
                </div>

            {/*figure*/} 

                <div className="figures">
                    <div>
                        <span>+140</span>
                        <span>coachs expertos</span>
                    </div>
                    <div>
                        <span>+1000</span>
                        <span>Miembros unidos</span>
                    </div>
                    <div>
                        <span>+50</span>
                        <span>Programas fitness</span>
                    </div>
                </div>

                {/*hero botones*/}

                <div className="hero-buttons">
                    <button className="btn">Empezar</button>
                    <button className="btn">Aprender mas</button>
                </div>
            </div>
            <div className="right-h">
                <button className="btn">Unete Ahora</button>

                <div className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Ritmo Cardiaco</span>
                    <span>116 Bpm</span>
                </div>

                {/*hero img*/}

                <img src={hero_imagen} alt="" className="hero-image"/>
                <img src={hero_image_back} alt="" className="hero-image-back"/>
            </div>
        </div>
    )
}

export default Hero