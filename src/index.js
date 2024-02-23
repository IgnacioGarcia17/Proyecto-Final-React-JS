import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import OtroComponente from './components/OtroComponente';
import CartWidget from './components/CartWidget';
import ItemDetail from './components/ItemDetail';
import Contacto from './components/Contacto'; // Importamos el componente Contacto
import './styles.css'; // Importamos los estilos CSS

ReactDOM.render(
  <Router>
    <div>
      <NavBar />
      <CartWidget />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetail />} />
        <Route path="/contacto" element={<Contacto />} /> {/* Nueva ruta para la página de contacto */}
      </Routes>
      <OtroComponente />
    </div>
  </Router>,
  document.getElementById('root')
);
