import React from "react"
import Logo from "../Images/pic1.jpg"
import "./text.css"


const Text = () => {
    return (
        <section className="headerBox">
            <div className="navlinks">
                <h4>NEW PRODUCT</h4>
                <h3 id="text" >THE TWIST OF HEALTHY YOGURT</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, nesciunt.</p>
            </div>
            <div className="logo">
                <img src={Logo} width="300" alt="" />
            </div>
        </section>
    )
}

export default Text