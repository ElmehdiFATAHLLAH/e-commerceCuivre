import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons';


const Footer = (props) =>{
    return(
        <div className='text-white sm:flex sm:flex-col sm:text-center sm:mx-10 md:flex-col-3 sm:px-5 md:grid md:grid-cols-2 lg:space-y-4 lg:flex lg:flex-row mx-2 rounded-2xl py-10 mb-10' style={{backgroundColor: '#211655'}}>
  <div className='lg:w-1/4 md:w-1/2 lg:ml-12 sm:mb-6 lg:mb-0 sm:text-center sm:items-center sm:justify-center'>
    <img src={props.src} className='rounded-circle w-36 mx-auto sm:mx-50' alt='Logo' />
    <ul className='space-y-2 text-center'>
      <li><FontAwesomeIcon icon={faLocationDot} /><span className='ml-2'>Maroc, Casablanca</span></li>
      <li><FontAwesomeIcon icon={faPhone} /><span className='ml-2'>+212 644181516</span></li>
      <li><FontAwesomeIcon icon={faEnvelope} /><span className='ml-2'>elmehdifatahllah@gmail.com</span></li>
    </ul>
  </div>
  <div className='lg:w-1/4 md:w-1/2 sm:mt-6 lg:mt-0 lg:space-y-4 sm:mb-6 lg:mb-0 text-center'>
    <em><h1 className='text-2xl font-bold'>MaisonManou.ma</h1></em>
    <div className='flex flex-col space-y-2'>
      <Link to="/" className='hover:text-red-500 transition duration-80'>Accueil</Link>
      <Link to="/Boutique" className='hover:text-red-500 transition duration-80'>Boutique</Link>
      <Link to="/Catégories" className='hover:text-red-500 transition duration-80'>Catégories</Link>
      <Link to="/Contact" className='hover:text-red-500 transition duration-80'>Contact</Link>
    </div>
  </div>
  <div className='lg:w-1/4 md:w-1/2 sm:mt-6 lg:mt-0 lg:space-y-4 sm:mb-6 lg:mb-0 text-center'>
    <em><h1 className='text-2xl font-bold'>Catégories</h1></em>
    <div className='flex flex-col space-y-2'>
      <Link to="#" className='hover:text-red-500 transition duration-80'>Trousse</Link>
      <Link to="#" className='hover:text-red-500 transition duration-80'>Cartable</Link>
    </div>
  </div>
  <div className='lg:w-1/4 md:w-1/2 sm:mt-6  lg:mt-0 lg:space-y-4 text-center'>
    <em><h1 className='text-2xl font-bold'>Follow us</h1></em>
    <div className='flex space-x-4 justify-center'>
      <Link to="" className='text-3xl'><FontAwesomeIcon icon={faFacebook} /></Link>
      <Link to="" className='text-3xl'><FontAwesomeIcon icon={faInstagram} /></Link>
      <Link to="" className='text-3xl'><FontAwesomeIcon icon={faTwitter} /></Link>
      <Link to="" className='text-3xl'><FontAwesomeIcon icon={faTiktok} /></Link>
    </div>
  </div>
</div>

      

    );
}

export default Footer;