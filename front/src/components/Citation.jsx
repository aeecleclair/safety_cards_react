
import { useState, useEffect } from "react";
import "./citation.css";

export default function QuoteCard({ quotes }) {
  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, 5000);
    return () => clearInterval(interval);
  }, [quotes]);

  return (
    <div className="quote-card">
      <p className="quote-text">{quote.text}</p>
      <span className="quote-author">— {quote.author}</span>
    </div>
  );
}

