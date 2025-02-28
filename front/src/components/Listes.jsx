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
            <span className="liste-number">{index + 1}</span>
            <div className="liste-content">
              <h3 className="item-title">{item.title}</h3>
              <p className="item-subtitle">{item.subtitle}</p>
              {item.subitems && (
                <ol className="sub-liste-items" type="a">
                  {item.subitems.map((subitem, subindex) => (
                    <li key={subindex} className="sub-liste-item">
                      <div className="sub-liste-content">
                        <h4 className="sub-item-title">{subitem.title}</h4>
                        <p className="sub-item-subtitle">{subitem.subtitle}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ListeNumerotee;