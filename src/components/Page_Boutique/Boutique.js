import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Footer from "../Page_Acceuil/Footer";
import Copyright from "../Page_Acceuil/Copyright";

class Boutique extends Component {
    constructor() {
        super();
        this.state = {
            listProduit: "", // Initialisez le champ de recherche avec une chaîne vide
        };
    }

    handleChange = (event) => {
        this.setState({
            listProduit: event.target.value,
        });
    }

    render() {
        const { listProduit } = this.state; // Destructuring pour accéder au champ de recherche

        const images = [
            { id: 1, title: "Trousse Cuire", src: "image12.png", prix: 250, prix_vrai: 300, promo: 17 },
            { id: 2, title: "Cartable Cuire", src: "image35.png", prix: 600, prix_vrai: 800, promo: 25 },
            { id: 3, title: "Trousse Cuire", src: "image2.jpeg", prix: 250, prix_vrai: 300, promo: 17 },
            { id: 4, title: "Cartable Cuire", src: "image44.png", prix: 600, prix_vrai: 800, promo: 25 },
            { id: 5, title: "Trousse Cuire", src: "image55.png", prix: 250, prix_vrai: 300, promo: 17 }
        ]

        // Filtrer les produits en fonction du terme de recherche
        const filteredProducts = images.filter((product) =>
            product.title.toLowerCase().includes(listProduit.toLowerCase())
        );

        return (
            <div className="">
                <div className="mx-10 rounded-2xl" style={{ backgroundColor: '#211655' }}>
                    <em><h1 className="font-bold text-3xl text-center text-white my-10 py-2">Notre Boutique</h1></em>
                </div>
                <div className="text-2xl">
                    <input className="border rounded-2xl w-96 mx-20" type="text" value={listProduit} placeholder="SEARCH..." onChange={this.handleChange} />
                </div>
                <Link to="#">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-6 my-4">
                        {filteredProducts.map(image => (
                            <div key={image.id} id='body' className='w-100 shadow-md px-10 slick-slide-wrapper group relative mx-4 py-6'>
                                <p className='font-bold bg-green-600 text-center rounded-2xl text-white mx-4 my-2'>PROMO {image.promo}%</p>
                                <img src={image.src} alt={image.title} className='w-full p-3 object-cover transition-transform transform duration-700 hover:scale-110' />
                                <em><h2 className='text-center text-2xl font-bold'>{image.title}</h2></em>
                                <p id="etoile" className='text-center text-yellow-500'>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </p>
                                <p className='text-center font-bold'>{image.prix} DHS <del className='text-red-500'>{image.prix_vrai} DHS</del></p>
                                <div className='text-center mt-6'>
                                    <Link to={`/Produit/${image.id}`} id='voir_prod' className='text-white font-bold py-2 px-10 rounded-2xl opacity-0' style={{ backgroundColor: '#211655' }}>Voir le Produit</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </Link>
                <Footer src="logo.png"/>
                <Copyright/>
            </div>
        );
    }
}

export default Boutique;
