import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCheck } from '@fortawesome/free-solid-svg-icons';
import Footer from '../Page_Acceuil/Footer';

const Produit = () => {
    const { id } = useParams();
    const images = [
      { id: 1, title: "Trousse Cuire", src: "image12.png", prix: 250, prix_vrai: 300, promo: 17 },
      { id: 2, title: "Cartable Cuire", src: "image35.png", prix: 600, prix_vrai: 800, promo: 25 },
      { id: 3, title: "Trousse Cuire", src: "image2.jpeg", prix: 250, prix_vrai: 300, promo: 17 },
      { id: 4, title: "Cartable Cuire", src: "image44.png", prix: 600, prix_vrai: 800, promo: 25 },
      { id: 5, title: "Trousse Cuire", src: "image55.png", prix: 250, prix_vrai: 300, promo: 17 }
  ]
    const filterApi = images.filter((produit) => produit.id == id);
    return (
      <div className='space-y-6'>
        <div>
          {filterApi.map((img) => (
            <div className='flex flex-col md:flex-row lg-flex-row lg:space-x-40 md:space-x-40 lg:mx-20 md:mx-20 mx-auto'>
              <div className='w-1/2 mx-8 flex justify-center items-center'>
                <img src={`../${img.src}`} className='w-96 my-10'/>
              </div>
              <div className='my-10 space-y-4 mx-8'>
                <em><p className='text-3xl font-bold'>{img.title}</p></em>
                <div className='text-yellow-400'>
                  <span className='text-yellow-400 inline-block'>
                    <FontAwesomeIcon icon={faStar}/>
                  </span>
                  <span className='text-yellow-400 inline-block'>
                    <FontAwesomeIcon icon={faStar}/>
                  </span>
                  <span className='text-yellow-400 inline-block'>
                    <FontAwesomeIcon icon={faStar}/>
                  </span>
                  <span className='text-yellow-400 inline-block'>
                    <FontAwesomeIcon icon={faStar}/>
                  </span>
                  <span className='text-yellow-400 inline-block'>
                    <FontAwesomeIcon icon={faStar}/>
                  </span>
                </div>
                <div className='flex space-x-8'>
                  <p className='text-green-700 md:text-2xl lg:text-2xl font-bold'>{img.prix} DHS</p>
                  <s className='text-red-500 md:text-2xl lg:text-2xl font-bold'>{img.prix_vrai} DHS</s>
                </div>
                <div>
                  <p className='font-bold'>Quantité :</p>
                  <input type='number' className='border text-center w-32' value="1"/>
                </div>
                <div>
                  <p className='font-bold'>Nom Complet</p>
                  <input type='text' className='border w-64'/>
                </div>
                <div>
                  <p className='font-bold'>N° de Téléphone</p>
                  <input type='text' className='border w-64'/>
                </div>
                <div>
                  <p className='font-bold'>Email</p>
                  <input type='email' className='border w-64'/>
                </div>
                <div>
                  <p className='font-bold'>Ville/Adresse</p>
                  <input type='text' className='border w-64'/>
                </div>
                <div>
                  <input type='submit' className='border rounded-2xl text-white w-64 h-8 hover:cursor-pointer' style={{backgroundColor: '#211655'}} value="Payé a La Livraison"/>
                  <p className='text-green-500'><FontAwesomeIcon icon={faCheck}/></p>
                  <p>LIVRAISON <strong>INCLUSE</strong></p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Footer src="../logo.png"/>
      </div>
    );    
  }
export default Produit;