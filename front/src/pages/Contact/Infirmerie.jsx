import { useEffect, useState } from "react";
import "../../App.css";
import { useAuth } from "../../auth";


const Infirmerie = () => {

  const { data, loading, error, getAuth, logout } = useAuth(); // Assurez-vous que le hook useAuth est correctement importé

  const isLoggedIn = Boolean(data?.access_token); // or whatever...

  const [contacts, setContacts] = useState([]);
  
  useEffect(() => {
    async function fetchContacts() {
      if (!data?.access_token) return; // ne fetch pas si l'utilisateur n'est pas authentifié
      try {
        const response = await fetch("http://localhost:8000/advert/adverts", {
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + data?.access_token,
          },
        });
        if (!response.ok) {
          data.access_token = null; // Réinitialiser le token si la requête échoue
          logout(); // Déconnexion de l'utilisateur
          throw new Error("Failed to fetch users");
        }
        const contactsData = await response.json();
        setContacts(contactsData);
      } catch (err) {
        console.error("Error fetching contacts:", err);
      }
    }
    fetchContacts();
  }, [data, data?.access_token, logout]);

  if (error) {
    return <div>Erreur lors de la connexion à MyECL.</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (isLoggedIn) {
    return (
      <div className="page">
        <h1 className="titre-page">Infirmerie</h1>
        
          <h1 className="sous-titre-2">Contact</h1>
          <p className="texte"> Mail : {contacts.mail}</p>
          <p className="texte"> Téléphone : {contacts.phone}</p>
          <p className="texte"> Adresse : {contacts.adresse}</p>
          <p className="texte"> Horaires : {contacts.horaire}</p>

          <button onClick={logout}>Logout</button>
      </div>
    )
  }

    return (
      <div className="page">
        <h1 className="titre-page">Connexion</h1>
        
        <p className="texte"> Vous devez vous connecter pour accéder à ses informations :</p>

        <button style={{ margin: "24px" }} type="button" onClick={() => getAuth()}>
          Se connecter
        </button>

      </div>
    );
  };
  
  export default Infirmerie;

