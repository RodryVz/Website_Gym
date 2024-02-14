import Header from "../Header/Header";
import "./Hero.css";
import hero_imagen from "../../assets/hero_image.png";
import Heart from "../../assets/heart.png";
import { motion } from "framer-motion";


const Hero = () => {
    const transition = {type: 'spring', duration: 3};
    const mobile = window.innerWidth<=768 ? true: false;
    return (
        <div className="hero" id="home">
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header />

                <div className="the-best-ad">
                    <motion.div
                    initial = {{left: mobile? '165px': '238px'}}
                    whileInView={{left: '8px'}}
                    transition={{...transition, type: 'tween'}}
                    ></motion.div>
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
                

                <motion.div
                    initial = {{right: "-1rem"}}
                    whileInView={{right: "4rem"}}
                    transition={transition}
                    className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Ritmo Cardiaco</span>
                    <span>116 Bpm</span>
                    </motion.div>
                {/*hero img*/}

                <img src={hero_imagen} alt="" className="hero-image"/>
            </div>
            <hr />
        </div>
    )
}

export default Hero