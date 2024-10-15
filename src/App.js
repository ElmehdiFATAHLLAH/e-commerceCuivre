import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Acceuil from './components/Page_Acceuil/Acceuil';
import Boutique from './components/Page_Boutique/Boutique';
import Categorie from './components/Page_Categorie/Categorie';
import Produit from './components/Page_Produit/Produit';
import Contact from './components/Page_Contact/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/Boutique" element={<Boutique />} />
        <Route path="/Categorie/:categorie" element={<Categorie />} />
        <Route path="/Produit/:id" element={<Produit/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
