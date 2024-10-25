import React from 'react';
import './PersonalInfo.css'; // Asegúrate de que la ruta sea correcta

const PersonalInfo = () => {
  return (
    <section className="personal-info-section">
      <h2 className="personal-info-title">Información Personal</h2>
      <div className="personal-info-item">
        <div className="circle"></div>
        <p><strong>Nombre:</strong> Marco Antonio Espina Erices</p>
      </div>
      <div className="personal-info-item">
        <div className="circle"></div>
        <p><strong>Edad:</strong> 34 Años.</p>
      </div>
      <div className="personal-info-item">
        <div className="circle"></div>
        <p><strong>Ubicación:</strong> Santiago, Chile.</p>
      </div>
      <div className="personal-info-item">
        <div className="circle"></div>
        <p><strong>Email:</strong> marcoantonio.espina5@gmail.com</p>
      </div>
      <div className="personal-info-item">
        <div className="circle"></div>
        <p><strong>Teléfono:</strong> +56921106869</p>
      </div>
      <div className="personal-info-item">
        <div className="circle"></div>
        <p><strong>Descripción:</strong> Desarrollador web con experiencia en React y Tailwind CSS,</p>
      </div>
      <div className="personal-info-item">
        <p>Apasionado por el aprendizaje de nuevas tecnologías.</p>
      </div>
      
    </section>
  );
};

export default PersonalInfo;
