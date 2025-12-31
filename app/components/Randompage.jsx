"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { pagesDataByLang } from "./pagesData";
import { useLanguage } from "../providers/LanguageProvider";
import "./randompage.css";

const RandomPageSelector = () => {
  const [randomPage, setRandomPage] = useState(null);
  const router = useRouter();
  const { lang } = useLanguage() || { lang: 'fr' };
  const data = pagesDataByLang[lang] || pagesDataByLang.fr;

  useEffect(() => { setRandomPage(null); }, [lang]);

  const selectRandomPage = () => {
    const randomCategoryIndex = Math.floor(Math.random() * data.length);
    const randomCategory = data[randomCategoryIndex];
    const randomItemIndex = Math.floor(Math.random() * randomCategory.items.length);
    const randomItem = randomCategory.items[randomItemIndex];
    setRandomPage({ ...randomItem, category: randomCategory.category });
  };

  return (
    <div className="random-container">
      {!randomPage ? (
        <button onClick={selectRandomPage} className="random-button">
          {lang === 'en' ? '🎲 Discover a topic' : '🎲 Découvre une thématique'}
        </button>
      ) : (
        <div className="random-card">
          <button onClick={selectRandomPage} className="refresh-button" aria-label={lang === 'en' ? 'Pick another random topic' : 'Choisir une autre thématique aléatoire'}>
            ⟳
          </button>
          <h1 className="random-card-titre">{randomPage.name}</h1>
          <p className="category-text">{lang === 'en' ? 'Category:' : 'Catégorie :'} {randomPage.category}</p>
          <button onClick={() => router.push(randomPage.path)} className="random-button">
            {lang === 'en' ? 'Open page' : 'Découvrir la page'}
          </button>
        </div>
      )}
    </div>
  );
};

export default RandomPageSelector;
