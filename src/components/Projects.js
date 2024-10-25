import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectList = [

    {
      title: 'Proyecto 4',
      description: 'Descripción del proyecto 1',
      link: 'https://github.com/tuusuario/proyecto1',
    },
    {
      title: 'Aplicacion de consulta de clima',
      description: 'App generada con API para verificar el estado del clima y el pronostico del mismo en diferentes ciudades.',
      link: 'https://github.com/MEspinaE/Clima',
    },
    {
      title: 'Reloj digital',
      description: 'Reloj digital sencillo generado con código Python',
      link: 'https://github.com/MEspinaE/reloj-digital',
    },
    {
      title: 'Generador de contraseñas aleatorias',
      description: 'Generador de contraseñas generado en Python',
      link: 'https://github.com/MEspinaE/generador-contrase-as',
    },
    {
      title: 'Codificador QR',
      description: 'Encriptador de datos en QR generado en Python.',
      link: 'https://github.com/MEspinaE/codificador-qr',
    },
    {
      title: 'Web Login',
      description: 'Sistema de inicio de sesion generado con Flask, HTML y CSS',
      link: 'https://github.com/MEspinaE/web-login',
    }
  ];

  return (
    <section id="projects">
      <h2>Mis Proyectos</h2>
      <div className="project-list">
        {projectList.map((project, index) => (
          <div className="project" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Ver Proyecto
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
