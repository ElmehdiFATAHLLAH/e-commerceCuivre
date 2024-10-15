import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './style.css';
import Footer from '../Page_Acceuil/Footer';
import Copyright from '../Page_Acceuil/Copyright';


const Categorie = () => {
  const { categorie } = useParams();
  const images = [
    { id: 1, categorie: "Trousse", title: "Trousse Cuire", src: "image12.png", prix: 250, prix_vrai: 300, promo: 17 },
    { id: 2, categorie: "Cartable", title: "Cartable Cuire", src: "image35.png", prix: 600, prix_vrai: 800, promo: 25 },
    { id: 3, categorie: "Trousse", title: "Trousse Cuire", src: "image2.jpeg", prix: 250, prix_vrai: 300, promo: 17 },
    { id: 4, categorie: "Cartable", title: "Cartable Cuire", src: "image44.png", prix: 600, prix_vrai: 800, promo: 25 },
    { id: 5, categorie: "Trousse", title: "Trousse Cuire", src: "image55.png", prix: 250, prix_vrai: 300, promo: 17 }
  ];

  const produitsFiltres = images.filter((image) => image.categorie === categorie);

  return (
    <div>
        <em><h1 className='font-bold text-3xl text-center text-white mx-10 my-10 py-2 rounded-2xl' style={{backgroundColor: '#211655'}}>{categorie}s</h1></em>
        <Link>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-6 my-4">
                {produitsFiltres.map((image) => (
                <div id='body' key={image.id} className='w-100 shadow-md px-10 slick-slide-wrapper group relative mx-4 py-6'>
                    <p className='font-bold bg-green-600 text-center rounded-2xl text-white mx-4 my-2'>PROMO {image.promo}%</p>
                    <img src={`../${image.src}`} alt={image.title} className='w-full p-3 object-cover transition-transform transform duration-700 hover:scale-110' />
                    <em><h2 className='text-center text-2xl font-bold'>{image.title}</h2></em>
                    <p className='text-center text-yellow-500'>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                    </p>
                    <p className='text-center font-bold'>{image.prix} DHS <del className='text-red-500'>{image.prix_vrai} DHS</del></p>
                    <div className='text-center mt-6'>
                        <Link to={`/Produit/${image.id}`} id='voir_prod' className='text-white font-bold py-2 px-10 rounded-2xl opacity-0' style={{backgroundColor: '#211655'}}>Voir le Produit</Link>
                    </div>
                </div>
                ))}
            </div>
        </Link>
    <Footer src="logo.png"/>
    <Copyright/>
    </div>
  );
};

export default Categorie;
