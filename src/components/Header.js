import React from 'react';
import './Header.css'; // Estilos opcionales
import miFoto from '../images/1.png'; // Importa tu imagen
import DropdownMenu from './DropdownMenu'; // Asegúrate de importar el menú desplegable

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <img src={miFoto} alt="Marco Espina" className="profile-pic" />
        <div className="header-title">
          <h1>Marco Antonio Espina Erices</h1>
        </div>
        <nav>
          <DropdownMenu />
        </nav>
      </div>
    </header>
  );
};

export default Header;
