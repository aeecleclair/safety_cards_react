import React from 'react';
import "./footer.css"; 

const Footer = () => {
  return (
    <footer>
      <p>Aucune hiérarchie n'a été faite dans la présentation des thématiques ; leur ordre est alphabétique.</p>
      <div className = "logos">
        <img src="/assets/logo_nb_bis.png" alt="Logo Safety Cards" className="logo-safety" />
        <img src="/assets/2024_LOGO-CENTRALE-H_BLANC.png" alt="Logo Centrale Lyon" className="logo-centrale" />
      </div>
      
      <p>&copy; 2025 Safety Cards. Tous droits réservés.</p>
      
    </footer>
  );
};

export default Footer;
