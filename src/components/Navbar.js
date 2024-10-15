import React, { Component } from "react";
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Menu from './Menu.js';
import Acceuil from "./Page_Acceuil/Acceuil";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuVisible: false,
      categoriesDropdownOpen: false
    };
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      menuVisible: !prevState.menuVisible
    }));
  };

  toggleCategoriesDropdown = () => {
    this.setState(prevState => ({
      categoriesDropdownOpen: !prevState.categoriesDropdownOpen
    }));
  };

  closeMenu = () => {
    this.setState({ menuVisible: false });
  };

  closeDropdown = () =>{
    this.setState({categoriesDropdownOpen: false})
  };

  render() {
    return (
      <div>
        <div className="flex justify-between items-center mx-auto py-4 px-6 shadow-md bg-black-500" id="element">
          <div>
            <h1 className="font-bold text-2xl lg:font-serif md:font-inter" id="logo">MaisonManou</h1>
          </div>
          <div className="hidden lg:flex lg:space-x-8 md:flex md:space-x-4">
            <Link to="/" className="hover:text-red-600 font-bold transition duration-20000" onClick={this.closeDropdown}>Accueil</Link>
            <Link to="/Boutique" className="hover:text-red-600 font-bold transition duration-20000" onClick={this.closeDropdown}>Boutique</Link>
            <button
              onClick={this.toggleCategoriesDropdown}
              className="hover:text-red-600 font-bold transition duration-20000"
            >
              Catégories
            </button>
            {this.state.categoriesDropdownOpen && (
              <div className="absolute right-2 mt-10 py-2 w-48 bg-white border rounded-lg">
                <Link to="/Categorie/Trousse" onClick={this.toggleCategoriesDropdown}  className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">
                  Trousse
                </Link>
                <Link to="/Categorie/Cartable" onClick={this.toggleCategoriesDropdown}  className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">
                  Cartable
                </Link>
              </div>
            )}
            <Link to="/Contact" className="hover:text-red-600 font-bold transition duration-20000" onClick={this.closeDropdown}>Contact</Link>
          </div>
          <div className="sm:flex md:hidden lg:hidden ml-auto" id="btn">
            <button onClick={this.toggleMenu}>
              <FontAwesomeIcon icon={faBars} className="font-bold text-3xl" />  
            </button>
          </div>
        </div>
        <Menu menuVisible={this.state.menuVisible} closeMenu={this.closeMenu} dropdown={this.toggleCategoriesDropdown} categories={this.state.categoriesDropdownOpen} closeDropdown={this.closeDropdown}/>
      </div>
    );
  }
}

export default Navbar;
