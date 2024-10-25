import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll'; // Asegúrate de instalar react-scroll
import './DropdownMenu.css'; // Asegúrate de importar los estilos

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); // Referencia al menú desplegable

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    // Cierra el menú si se hace clic fuera de él
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Añade el evento de clic al documento
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      // Limpia el evento al desmontar el componente
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button className="dropdown-toggle" onClick={toggleMenu}>
        Menú
      </button>
      <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
        <li>
          <Link to="personal-info" smooth={true} duration={500} onClick={toggleMenu}>
            Información Personal
          </Link>
        </li>
        <li>
          <Link to="technologies" smooth={true} duration={500} onClick={toggleMenu}>
            Tecnologías
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} onClick={toggleMenu}>
            Proyectos
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>
            Contacto
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
