import React, { Component } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Produit from '../Page_Produit/Produit';

class Body extends Component {
    slides = [
        { id: 1, title: 'Trousse', content: 'image12.png', prix: 250, solde: 17, prix_vrai: 300 },
        { id: 2, title: 'Cartable', content: 'image35.png', prix: 600, solde: 25, prix_vrai: 800 },
        { id: 3, title: 'Trousse', content: 'image2.jpeg', prix: 250, solde: 17, prix_vrai: 300 },
        { id: 4, title: 'Cartable', content: 'image44.png', prix: 600, solde: 25, prix_vrai: 800 },
        { id: 5, title: 'Trousse', content: 'image55.png', prix: 250, solde: 17, prix_vrai: 300 }
    ];

    settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,

        responsive: [
            {
                breakpoint: 540, 
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 805,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1073,
                settings: {
                    slidesToShow: 3, 
                }
            },
            {
                breakpoint: 1200, 
                settings: {
                    slidesToShow: 4,
                }
            }
        ]
    };


    render() {
        return (
        <div>
                <div className='my-14 mx-12 rounded-3xl text-white' style={{backgroundColor: '#211655'}}>
                    <em><h2 className='font-bold  sm-text-2xl md:text-3xl text-center'>NOTRE SELECTION POUR VOUS</h2></em>
                    <div className='text-center'><Link to='/Boutique'>Voir Plus</Link></div>
                </div>
                <div className='overflow-hidden'>
                <Slider {...this.settings}>
                    {this.slides.map((slide) => (
                        <Link to='#' key={slide.id}>
                            <div id='body' className='w-100 shadow-md px-10 slick-slide-wrapper group relative'>
                                <p className='font-bold bg-green-600 text-center rounded-2xl text-white'>PROMO -{slide.solde}%</p>
                                <img src={slide.content} alt={slide.title} className='w-full p-3 object-cover transition-transform transform duration-700 hover:scale-110' />
                                <em><h2 className='text-center text-2xl font-bold'>{slide.title}</h2></em>
                                <p className='text-center text-yellow-500'>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </p>
                                <p className='text-center font-bold'>{slide.prix} DHS <del className='text-red-500'>{slide.prix_vrai} DHS</del></p>
                                <div className='text-center mt-6'>
                                    <Link to={`/Produit/${slide.id}`} id='voir_prod' className='text-white font-bold py-2 px-10 rounded-2xl opacity-0' style={{backgroundColor: '#211655'}} onClick={this.acheterProduit}>Voir le Produit</Link>
                                </div>
                                <div className='pb-10'></div>
                            </div>
                        </Link>
                    ))}
                </Slider>
            </div>
            <div className='text-center font-bold text-2xl text-white my-14 mx-12 rounded-3xl py-2' style={{backgroundColor: '#211655'}}>
                <Link to='/Boutique' className=''>Voir Plus De Produit</Link>
            </div>  
        </div>
        
        );
    }
}

export default Body;
