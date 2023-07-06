import { plansData } from "../../data/plansData";
import "./Plans.css";
import whiteTick from "../../assets/whiteTick.png";


const Plans = () => {
    return (
        <div className="plans-container">
            <hr />
            <div className="blur plans-blur-1"></div>
            <div className="blur plans-blur-2"></div>
            <div className="programs-header">
                <span className="stroke-text">LISTO PARA EMPEZAR</span>
                <span>TU VIAJE</span>
                <span className="stroke-text">CON NOSOTROS</span>
            </div>

            {/* plan card */}

            <div className="plans">
                {plansData.map((plan,i)=> (
                    <div className="plan" key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>{plan.price}</span>

                        <div className="features">
                            {plan.features.map((feature, i)=>(
                                <div className="feature">
                                    <img src={whiteTick} alt="" />
                                    <span key={i}>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div>
                            <span></span>
                        </div>
                        <button className="btn">Unete Ahora</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Plans