import React from "react";
import { useEffect, useState } from "react";
import trafficPoloce from '../assets/traffic.png';
import lightframe from '../assets/lightframe.png'
import './light.css'
const Light = () => {
    const [colorIndex, setColorIndex] = useState(0);
    const lightDurations = [1000, 1000, 1000];

    useEffect(() => {
        console.log("psnkaj")
        const timer = setTimeout(() => {
            setColorIndex((colorIndex + 1) % 3);
console.log("klklk")
        }, lightDurations[colorIndex]);
        return () => {
            clearTimeout(timer);
        };
    })
    return (
        <div className=" light_main">
            <div className="container ">
                <div className="light_heading">
                    <h1>Traffic Light </h1>
                </div>
                <div className="sub_light_box">
                    <div className="light_design">


                        <div className="lights">
                            <div className="light" style={{ background: "red", opacity: colorIndex === 0 ? 1 : 0.4 }} >

                            </div>
                            <div className="light" style={{ background: "#ffeb3b", opacity: colorIndex === 1 ? 1 : 0.4 }} >

                            </div>
                            <div className="light" style={{ background: "#45bd29", opacity: colorIndex === 2 ? 1 : 0.4 }}>

                            </div>

                            <div className="lightframe">
                                {/* <img src={lightframe} alt="" /> */}
                                <img src={lightframe} alt="" />
                            </div>
                        </div>
                        <div className="light_support">
                            <span className="lightBase"></span>
                        </div>

                    </div>

                    <div className="traffic_police">
                        <img src={trafficPoloce} alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Light;