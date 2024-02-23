import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <h1>Nombre de la Marca</h1>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/contacto">Contacto</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
