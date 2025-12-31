"use client";

import "./citation.css";
import React from "react";

const Quote = ({ text, author }) => {
  return (
    <div className="quote-container">
      <div className="quote-background">❝</div>
      <p className="quote-text">{text}</p>
      {author && <p className="quote-author">— {author}</p>}
    </div>
  );
};

export default Quote;
