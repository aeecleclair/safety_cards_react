import QuoteCard from "../components/Citation"; 
import ImageTextPopup from "../components/Cartes"; 
import ListeNumerotee from "../components/Listes";


const items = ["Élément 1", "Élément 2", "Élément 3"];



const quotes = [
  { text: "Le succès, c'est tomber sept fois et se relever huit.", author: "Proverbe japonais" },
  { text: "La meilleure façon de prédire l’avenir, c’est de le créer.", author: "Peter Drucker" },
  { text: "On ne voit bien qu’avec le cœur. L’essentiel est invisible pour les yeux.", author: "Antoine de Saint-Exupéry" },
];

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Bienvenue sur Safety Cards</h1>

      <p className="text-lg mb-8">Ceci est la page d'accueil.</p>
      <QuoteCard quotes={quotes} />
      <ImageTextPopup
        image="./src/assets/feu.jpg"
        title="La carte 3♠"
        shortText="Prévention sur les risques d'incendie"
        longText="Ceci est une phrase qui vise à rallonger la  longueur du texte. L’image présente un paysage naturel captivant où la lumière douce du matin baigne l'ensemble de la scène. Au premier plan, une prairie verdoyante s'étend à perte de vue, avec des herbes hautes qui dansent lentement sous l'effet d’une brise légère. Les couleurs du sol, d’un vert tendre, se mélangent subtilement aux fleurs sauvages de toutes sortes : des marguerites blanches, des coquelicots rouges éclatants, et des boutons d’or jaunes, ajoutant une touche de couleur vive au tableau. Plus loin, un sentier sinueux se fraye un chemin à travers cette végétation, invitant à l’exploration.
        Ceci est une phrase qui vise à rallonger la  longueur du texte. L’image présente un paysage naturel captivant où la lumière douce du matin baigne l'ensemble de la scène. Au premier plan, une prairie verdoyante s'étend à perte de vue, avec des herbes hautes qui dansent lentement sous l'effet d’une brise légère. Les couleurs du sol, d’un vert tendre, se mélangent subtilement aux fleurs sauvages de toutes sortes : des marguerites blanches, des coquelicots rouges éclatants, et des boutons d’or jaunes, ajoutant une touche de couleur vive au tableau. Plus loin, un sentier sinueux se fraye un chemin à travers cette végétation, invitant à l’exploration."
        textButton="⤢ Agrandir la carte"
      />
    

        <ListeNumerotee 
         title="Ma Liste Numérotée" 
          subtitle="Voici quelques éléments" 
          items={items} 
        />

    </div>
  );
};

export default Home;