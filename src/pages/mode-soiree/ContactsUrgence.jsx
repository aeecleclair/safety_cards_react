import React from "react";
import { useNavigate } from "react-router-dom";
import ContactCard from "../../components/Contact";
import "./mode-soiree.css";

// Page des contacts d'urgence
const ContactsUrgence = () => {
  const contacts = [
    {
      image: "/assets/logo_wei_2025.png",
      title: "Light",
      subtitle: "Prez' WEI",
      phone: "📱 07 77 26 66 12",
      textButton: "📞 Appeler",
      link: "tel:0777266612",
      bgColor: "#87B7E6",
      textColor: "#ffffff",
    },
    {
      image: "/assets/bde.png",
      title: "Tsuki",
      subtitle: "Prez' BDE",
      phone: "📱 06 47 74 78 88",
      textButton: "📞 Appeler",
      link: "tel:0647747888",
      bgColor: "white",
      textColor: "#245377",
    },
    {
      image: "/assets/bde.png",
      title: "Mawi",
      subtitle: "Vice Prez' BDE",
      phone: "📱 07 72 31 40 97",
      textButton: "📞 Appeler",
      link: "tel:0772314097",
      bgColor: "white",
      textColor: "#245377",
    }
  ];

  const navigate = useNavigate();
  return (
    <div className="page urgence-page">
      <h1 className="titre-page">Contacts d'urgence</h1>
      <button className="back-inline-btn" onClick={() => navigate(-1)}>⟵ Retour</button>

  <div className="urgence-grid" style={{marginTop:'24px'}}>
        {contacts.map((c, i) => (
          <ContactCard key={i} {...c} variant="horizontal" />
        ))}
      </div>


    <div className="mode-soiree-note">
        (Ces ressources sont propres aux élèves de Centrale Lyon)
      </div>

      <div className="initiative-peer-care">
        <p className="texte" style={{marginBottom:'12px'}}>Une initiative de l'association <strong>Peer Care</strong></p>
        <img
          src="/assets/peer_care_sans_fond.png"
          alt="Logo Peer Care"
          className="peer-care-logo"
        />
      </div>


    </div>
  );
};

export default ContactsUrgence;
