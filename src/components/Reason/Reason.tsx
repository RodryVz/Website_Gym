import "./Reason.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import tick from "../../assets/tick.png";

const Reason = () => {
    return (
        <div className="Reason" id="reason">
            <div className="left-r">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
            </div>

            <div className="right-r">
                <span>Algunas razones</span>

                <div>
                    <span className="stroke-text">Porque </span>
                    <span>Elegirnos?</span>
                </div>

                <div className="details-r">
                    <div>
                        <img src={tick} alt="" />
                        <span>Mas de 50 entrenadores expertos</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>Entrenar inteigentemente y mejor que antes</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>1 programa gratuitos para nuevos miembros</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>Calidad premium en nuestros equipos </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reason