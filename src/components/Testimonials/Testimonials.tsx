import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import { useState } from "react";
import LeftArrow  from "../../assets/leftArrow.png";
import RightArrow  from "../../assets/rightArrow.png";



const Testimonials = () => {
    const [selected, setSelected] = useState(0)
    const tlength = testimonialsData.length;
    return (
        <div className="Testimonials">
            <div className="left-t">
                <span>Testimonios</span>
                <span className="stroke-text">¿ que hablan</span>
                <span> de nosotros ?</span>
                <span>
                    {testimonialsData[selected].review}
                </span>
                <span>
                    <span style={{color: 'var(--orange)'}}>
                        {testimonialsData[selected].name}
                    </span>{" "}
                    - {testimonialsData[selected].status}
                </span>
            </div>

            <div className="right-t">
                <span></span>
                <span></span>
                <img src={testimonialsData[selected].image} alt="" />

                <div className="arrows">
                    <img
                    onClick={()=>{
                        selected===0 
                        ? setSelected(tlength -1) 
                        : setSelected((prev)=> prev -1);
                    }}
                    src={LeftArrow} alt="" />
                    
                    <img
                    onClick={()=> {
                        selected === tlength -1
                        ? setSelected(0)
                        : setSelected((prev) => prev +1)
                    }}
                    src={RightArrow} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Testimonials