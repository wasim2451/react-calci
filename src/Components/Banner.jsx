import React from "react";
import dark from "../Images/dark-mode.png";
export default function Banner(){
    return(
        <div className="banner-div">
            <p className="easyCalc">easy<span>calc</span></p>
            <div className="Img"><img src={dark} alt="Dark Mode" /></div>
        </div>
    )
}