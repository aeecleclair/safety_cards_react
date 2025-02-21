import React from "react";
import "./listes.css";

const ListeNumerotee = ({ title, subtitle, items }) => {
    return (
      <div className="liste-container">
        <h2 className="liste-title">{title}</h2>
        <p className="liste-subtitle">{subtitle}</p>
        <ol className="liste-items">
          {items.map((item, index) => (
            <li key={index} className="liste-item">
              <span className="liste-number">{index + 1}</span> {item}
            </li>
          ))}
        </ol>
      </div>
    );
  };
  
export default ListeNumerotee;