"use client";

import React from "react";
import "./workinprogress.css";

const Workinprogress = () => {
  return (
    <div>
      <div className="image-text">
        <div className="text-container">
          <h2>Page en cours de construction</h2>
          <p>En attendant, vous pouvez accéder aux ressources externes pour vous informer.</p>
        </div>
        <div className="image-conteneur">
          <img src="/assets/work_in_progress.jpg" alt="Travail en cours"/>
        </div>
      </div>
    </div>
  );
};

export default Workinprogress;
