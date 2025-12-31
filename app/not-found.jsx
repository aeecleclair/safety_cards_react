"use client";

import { TextImageRight } from "./components/Common";

export default function NotFound() {
  return (
    <div className="page">
      <h1 className="titre-page">Page non trouvée</h1>

      <TextImageRight
        text="Désolé, la page que vous recherchez n'existe pas ou a été déplacée. Veuillez vérifier l'URL ou retourner à la page d'accueil."
        imageSrc="/assets/404.png"
      />
    </div>
  );
}
