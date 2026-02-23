"use client";

import React from "react";
import { useRouter } from "next/navigation";
import ContactCard from "@/components/Contact";
import { assetPath } from "@/app/utils/assetPath";
import "./mode-soiree.css";

// Page des contacts d'urgence
const ContactsUrgence = () => {
  const contacts = [
    {
      image: assetPath("/assets/bde.png"),
      title: "Léo (Sid)",
      subtitle: "Prez' BDE",
      phone: "📱 06 38 37 50 08",
      textButton: "📞 Appeler",
      link: "tel:0638375008",
      bgColor: "white",
      textColor: "#245377",
    },
    {
      image: assetPath("/assets/bde.png"),
      title: "Dune (Pi'ky)",
      subtitle: "Vice Prez' BDE",
      phone: "📱 06 31 77 26 32",
      textButton: "📞 Appeler",
      link: "tel:0631772632",
      bgColor: "white",
      textColor: "#245377",
    },
    {
      image: assetPath("/assets/logo_challenge.png"),
      title: "Zoé (Billy)",
      subtitle: "Prez' Challenge",
      phone: "📱 06 77 39 52 88",
      textButton: "📞 Appeler",
      link: "tel:0677395288",
      bgColor: "white",
      textColor: "#ff8c00",
    },
        {
      image: assetPath("/assets/BDS.png"),
      title: "Aubane (Sehbra)",
      subtitle: "Prez' BDS",
      phone: "📱 07 66 51 28 98",
      textButton: "📞 Appeler",
      link: "tel:0766512898",
      bgColor: "white",
      textColor: "#000000",
    }
  ];

  const router = useRouter();
  return (
    <div className="page urgence-page">
      <h1 className="titre-page">Contacts d'urgence</h1>
      <button className="back-inline-btn" onClick={() => router.back()}>⟵ Retour</button>

  <div className="urgence-grid" style={{marginTop:'24px'}}>
        {contacts.map((c, i) => (
          <ContactCard key={i} {...c} variant="horizontal" />
        ))}
      </div>


    <div className="mode-soiree-note">
        {/*(Ces ressources sont propres aux élèves de Centrale Lyon)*/}
      </div>

      <div className="initiative-peer-care">
        <p className="texte" style={{marginBottom:'12px'}}>Une initiative de l'association <strong>Peer Care</strong></p>
        <img
          src={assetPath("/assets/peer_care.png")}
          alt="Logo Peer Care"
          className="peer-care-logo"
        />
      </div>


    </div>
  );
};

export default ContactsUrgence;



