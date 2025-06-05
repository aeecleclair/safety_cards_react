import React from "react";
import "./chiffres.css";

const Chiffre = ({ number, title, description }) => {
  return (
    <div className="chiffre-container">
      <h2 className="chiffre-number">{number}</h2>
      <h3 className="chiffre-title">{title}</h3>
      <p className="chiffre-description">{description}</p>
    </div>
  );
};

const ChiffresGroup = ({ chiffres }) => {
  return (
    <div className="chiffres-group">
      {chiffres.map((chiffre, index) => (
        <Chiffre 
          key={index} 
          number={chiffre.number} 
          title={chiffre.title} 
          description={chiffre.description} 
        />
      ))}
    </div>
  );
};

export { Chiffre, ChiffresGroup };
