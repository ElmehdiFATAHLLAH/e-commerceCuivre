import React from 'react';
import Background from './Background';
import Body from './Body';
import Footer from './Footer';
import Copyright from './Copyright';

const Acceuil = () =>{
    return(
        <div>
            <Background/>
            <Body/>
            <Footer src="logo.png"/>
            <Copyright/>
        </div>
    );
}

export default Acceuil;