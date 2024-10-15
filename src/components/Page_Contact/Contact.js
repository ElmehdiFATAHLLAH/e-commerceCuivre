import React from "react";
import Footer from "../Page_Acceuil/Footer";
import Copyright from "../Page_Acceuil/Copyright";

const Contact = () => {
    return(
        <div>
            <img src="background1.png" className="w-full my-10"/>
            <div className="text-center space-y-6 my-20" style={{color: '#211655'}}>
                <h1 className="text-6xl font-bold">Nous contacter</h1>
                <p className="text-4xl font-bold">+212 644-181516</p>
            </div>
            <Footer src="logo.png"/>
            <Copyright/>
        </div>
    );
}
export default Contact;