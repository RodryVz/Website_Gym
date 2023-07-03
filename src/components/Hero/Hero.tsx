import Header from "../Header/Header"
import "./Hero.css"

const Hero = () => {
    return (
        <div className="hero">
            <div className="left-h">
                <Header/>

                <div className="the-best-ad">
                    <div></div>
                    <span>The best fitness club in the town</span>
                </div>

                <div className="hero-text">
                    <div>
                        <span className="stroke-text">Moldea </span>
                        <span>tu</span>
                    </div>
                    <div><span>
                        Cuerpo ideal</span></div>
                </div>
            </div>

            <div className="right-h">Right side</div>
        </div>
    )
}

export default Hero