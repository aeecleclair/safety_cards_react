import { useState } from "react";
import { useNavigate } from "react-router-dom";
import pagesData from "./pagesData";
import "./randompage.css";

const RandomPageSelector = () => {
  const [randomPage, setRandomPage] = useState(null);
  const navigate = useNavigate();

  // Fonction pour choisir une page aléatoire
  const selectRandomPage = () => {
    const randomCategoryIndex = Math.floor(Math.random() * pagesData.length);
    const randomCategory = pagesData[randomCategoryIndex];

    const randomItemIndex = Math.floor(Math.random() * randomCategory.items.length);
    const randomItem = randomCategory.items[randomItemIndex];

    setRandomPage({ ...randomItem, category: randomCategory.category });
  };

  return (
    <div className="random-container">
      {!randomPage ? (
        // Affichage initial avec le bouton centré
        <button onClick={selectRandomPage} className="random-button">
          🎲 Découvre une thématique
        </button>
      ) : (
        // Affichage après sélection
        <div className="random-card">
          <button onClick={selectRandomPage} className="refresh-button">
          ⟳
          </button>
          <h1 className="random-card-titre">{randomPage.name}</h1>
          <p className="category-text">Catégorie : {randomPage.category}</p>
          <button onClick={() => navigate(randomPage.path)} className="linkButton">
            Aller à la page
          </button>
        </div>
      )}
    </div>
  );
};

export default RandomPageSelector;
