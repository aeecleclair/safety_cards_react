import React from 'react';
import { Link } from "react-router-dom";
import "./footer.css"; 

const Footer = () => {
  return (
    <footer>
      <p>Aucune hiérarchie n'a été faite dans la présentation des thématiques ; leur ordre est alphabétique.</p>


      <div className="liens-footer">
        <div className='liens-footer-col'>
          <p className='titre-categorie'>Connaissance de soi</p>
          <div>
            <Link to="/conf">Confiance & estime de soi</Link><br />
            <Link to="/genre">Identité de genre</Link><br />
            <Link to="/isolement">Isolement</Link>
          </div>
        </div>

        <div className='liens-footer-col'>
          <p className='titre-categorie'>Risques addictifs</p>
          <div>
            <Link to="/add_porno">Addiction à la pornographie</Link><br />
            <Link to="/add_reseaux">Addictions aux écrans & réseaux sociaux</Link><br />
            <Link to="/alcool">Consommation d'alcool</Link><br />
            <Link to="/stup">Consommation de stupéfiants</Link><br />
            <Link to="/tabac">Tabac & vapotage</Link>
          </div>
        </div>

        <div className='liens-footer-col'>
          <p className='titre-categorie'>Santé</p>
          <div>
            <Link to="/anxiete">Anxiété</Link><br />
            <Link to="/automutil">Automutilation</Link><br />
            <Link to="/depression">Dépression</Link><br />
            <Link to="/deracinement">Déracinement culturel</Link><br />
            <Link to="/endom">Endométriose & douleurs menstruelles</Link><br />
            <Link to="/handicap">Situation de handicap</Link><br />
            <Link to="/sommeil">Sommeil</Link><br />
            <Link to="/tca">Troubles des Conduites Alimentaires</Link><br />
            <Link to="/suicide">Tentative de suicide</Link>
          </div>
        </div>

        <div className='liens-footer-col'>
          <p className='titre-categorie'>Sexualité et amour</p>
          <div>
            <Link to="/consent">Consentement</Link><br />
            <Link to="/pratiques_sex">IST</Link><br />
            <Link to="/ivg">IVG</Link><br />
            <Link to="/sex_orient">Orientation sexuelle</Link><br />
            <Link to="/couple">Relations de couple</Link><br />
            <Link to="/revenge">Revenge porn</Link><br />
            <Link to="/sex">Sexualité et contraception</Link>
          </div>
        </div>

        <div className='liens-footer-col'>
          <p className='titre-categorie'>Vie courante</p>
          <div>
            <Link to="/accident">Accidents de la circulation</Link><br />
            <Link to="/aliment">Alimentation</Link><br />
            <Link to="/ecolo">Démarches écologiques</Link><br />
            <Link to="/detente">Détente & relaxation</Link><br />
            <Link to="/prec_eco">Précarité économique</Link><br />
            <Link to="/prec_mens">Précarité menstruelle</Link><br />
            <Link to="/sport">Santé physique & sport</Link><br />
            <Link to="/sedentarite">Sédentarité</Link><br />
            <Link to="/domestique">Risques domestiques</Link>
          </div>
        </div>

        <div className='liens-footer-col'>
          <p className='titre-categorie'>Vie de groupe</p>
          <div>
            <Link to="/cyber_harcel">Cyberharcèlement</Link><br />
            <Link to="/discri">Discriminations</Link><br />
            <Link to="/groupe">Effet de groupe</Link><br />
            <Link to="/empathie">Empathie</Link><br />
            <Link to="/harcel">Harcèlement</Link><br />
            <Link to="/inte">Pratiques d'intégration</Link><br />
            <Link to="/soumission">Soumission chimique</Link><br />
            <Link to="/vss">VSS</Link>
          </div>
        </div>
      </div>

      <div className="logos">
        <img src="/assets/logo_nb_bis.png" alt="Logo Safety Cards" className="logo-safety" />
        <img src="/assets/2024_LOGO-CENTRALE-H_BLANC.png" alt="Logo Centrale Lyon" className="logo-centrale" />
      </div>
      
      <p>&copy; 2025 Safety Cards. Tous droits réservés.</p>
      
    </footer>
  );
};

export default Footer;
