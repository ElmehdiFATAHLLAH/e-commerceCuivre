import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';

class Menu extends Component {
  render() {

    const { menuVisible, closeMenu, dropdown, categories , closeDropdown} = this.props;


    return (
      <div className={`z-10 absolute flex flex-col items-center bg-black text-white opacity-90 h-full w-full space-y-12 py-12 ${menuVisible ? '' : 'hidden'}`} id="menu">
        <button className='absolute text-3xl text-red-700 right-0 top-0 p-6' onClick={()=>{ closeMenu(); closeDropdown();}}>
          {menuVisible ? (
            <FontAwesomeIcon icon={faXmark} className="font-bold text-4xl" />
          ) : (
            <FontAwesomeIcon icon={faBars} className="font-bold text-3xl" />
          )}
        </button>
        <Link to="/" className="pr-80 pl-80" onClick={()=>{ closeMenu(); closeDropdown();}}>Accueil</Link>
        <Link to="/Boutique" className="pr-80 pl-80" onClick={()=>{ closeMenu(); closeDropdown();}}>Boutique</Link>
        <Link to="" className="pr-80 pl-80" onClick={dropdown}>Catégories</Link>
        {categories && (
          <div className="absolute bg-white font-bold right-0 rounded mr-32">
          <Link to="/Categorie/Trousse" onClick={() => { dropdown(); closeMenu(); }} categorie="Trousse" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">
            Trousse
          </Link>
          <Link to="/Categorie/Cartable" onClick={() => { dropdown(); closeMenu(); }} categorie="Cartable" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">
            Cartable
          </Link>
        </div>
        )}
        <Link to="/Contact" className="pr-80 pl-80" onClick={()=>{ closeMenu(); closeDropdown();}}>Contact</Link>
      </div>
    );
  }
}

export default Menu;
