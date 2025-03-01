import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider, useTheme } from "./ThemeProvider";
import ScrollToTopButton from "./components/ScrollTop";


import Home from "./pages/Home";


//Vie courante
import Vie_courante from "./pages/Vie-courante/Vie-courante-main";
import Accidents_circu from "./pages/Vie-courante/Accidents-circu";
import Alimentation from "./pages/Vie-courante/Alimentation";
import Anxiete from "./pages/Vie-courante/Anxiete";
import Demarches_eco from "./pages/Vie-courante/Demarches-eco";
import Detente_relax from "./pages/Vie-courante/Detente-relax";
import Precarite_eco from "./pages/Vie-courante/Precarite-eco";
import Precarite_mens from "./pages/Vie-courante/Precarite-mens";
import Risques_domestiques from "./pages/Vie-courante/Risques-domestiques";
import Sante_physique from "./pages/Vie-courante/Sante-physique";
import Sedentarite from "./pages/Vie-courante/Sedentarite";

//Santé
import Risques_addictifs from "./pages/Risques-addictifs/Risques-addictifs-main";
import Sante from "./pages/Sante/Sante-main";
import Automutilation from "./pages/Sante/Automutilation";
import Depression from "./pages/Sante/Depression";
import Deracinement from "./pages/Sante/Deracinement";
import Endometriose from "./pages/Sante/Endometriose";
import Handicap from "./pages/Sante/Handicap";
import Sommeil from "./pages/Sante/Sommeil";
import Suicide from "./pages/Sante/Suicide";
import Tca from "./pages/Sante/Tca"

//Risques addictifs
import Alcool from "./pages/Risques-addictifs/Alcool"
import Ecrans_reseaux from "./pages/Risques-addictifs/Ecrans-reseaux"
import Pornographie from "./pages/Risques-addictifs/Pornographie"
import Stupefiants from "./pages/Risques-addictifs/Stupefiants"
import Tabac from "./pages/Risques-addictifs/Tabac"

//Vie de groupe
import Vie_groupe from "./pages/Vie-groupe/Vie-groupe-main";
import Cyberharcelement from "./pages/Vie-groupe/Cyberharcelement"
import Discriminations from "./pages/Vie-groupe/Discriminations"
import Effet_groupe from "./pages/Vie-groupe/Effet-groupe"
import Empathie from "./pages/Vie-groupe/Empathie"
import Harcelement from "./pages/Vie-groupe/Harcelement"
import Integration from "./pages/Vie-groupe/Integration"
import Soumission_chimique from "./pages/Vie-groupe/Soumission-chimique"
import Vss from "./pages/Vie-groupe/Vss"

//Sexualité & vie amoureuse 
import Sexe_amour from "./pages/Sexe-amour/Sexe-amour-main";
import Consentement from "./pages/Sexe-amour/Consentement";
import Couple from "./pages/Sexe-amour/Couple";
import Ivg from "./pages/Sexe-amour/Ivg";
import Orientation from "./pages/Sexe-amour/Orientation";
import Pratiques_dangereuses from "./pages/Sexe-amour/Pratiques-dangereuses";
import Revenge_porn from "./pages/Sexe-amour/Revenge-porn";
import Sexualite from "./pages/Sexe-amour/Sexualite";

//Connaissance de soi
import Connaissance_soi from "./pages/Connaissance-soi/Connaissance-de-soi-main";
import Confiance from "./pages/Connaissance-soi/Confiance";
import Genre from "./pages/Connaissance-soi/Genre";
import Isolement from "./pages/Connaissance-soi/Isolement";


function App() {
  return (
    <ThemeProvider>
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        
        //Vie courante
        <Route path="/Vie-courante-main" element={<Vie_courante />} />
        <Route path="/accident" element={<Accidents_circu />} /> /* accident est le lien url, décorrélé de l'arborescence de vscode */
        <Route path="/aliment" element={<Alimentation />} />
        <Route path="/anxiete" element={<Anxiete />} />
        <Route path="/ecolo" element={<Demarches_eco />} />
        <Route path="/detente" element={<Detente_relax />} />
        <Route path="/prec_eco" element={<Precarite_eco />} />
        <Route path="/prec_mens" element={<Precarite_mens />} />
        <Route path="/domestique" element={<Risques_domestiques />} />
        <Route path="/sport" element={<Sante_physique />} />
        <Route path="/sedentarite" element={<Sedentarite />} />

        //Santé
        <Route path="/Sante-main" element={<Sante />} />
        <Route path="/automutil" element={<Automutilation />} />
        <Route path="/depression" element={<Depression />} />
        <Route path="/deracinement" element={<Deracinement />} />
        <Route path="/endom" element={<Endometriose />} />
        <Route path="/handicap" element={<Handicap />} />
        <Route path="/sommeil" element={<Sommeil />} />
        <Route path="/suicide" element={<Suicide />} />
        <Route path="/tca" element={<Tca />} />

        //Risques addictifs
        <Route path="/Risques-addictifs-main" element={<Risques_addictifs />} />
        <Route path="/alcool" element={<Alcool />} />
        <Route path="/add_reseaux" element={<Ecrans_reseaux />} />
        <Route path="/add_porno" element={<Pornographie />} />
        <Route path="/stup" element={<Stupefiants />} />
        <Route path="/tabac" element={<Tabac />} />

        //Vie de groupe
        <Route path="/Vie-groupe-main" element={<Vie_groupe />} />
        <Route path="/harcel" element={<Harcelement />} />
        <Route path="/groupe" element={<Effet_groupe />} />
        <Route path="/discri" element={<Discriminations />} />
        <Route path="/empathie" element={<Empathie />} />
        <Route path="/cyber_harcel" element={<Cyberharcelement />} />
        <Route path="/inte" element={<Integration />} />
        <Route path="/vss" element={<Vss />} />
        <Route path="/soumission" element={<Soumission_chimique />} />

        //Sexualité & vie amoureuse 
        <Route path="/Sexe-amour-main" element={<Sexe_amour />} />
        <Route path="/consent" element={<Consentement />} />
        <Route path="/couple" element={<Couple />} />
        <Route path="/ivg" element={<Ivg />} />
        <Route path="/sex_orient" element={<Orientation />}/>
        <Route path="/pratiques_sex" element={<Pratiques_dangereuses />} />
        <Route path="/revenge" element={<Revenge_porn />} />
        <Route path="/sex" element={<Sexualite />} />

        //Connaissance de soi
        <Route path="/Connaissance-de-soi-main" element={<Connaissance_soi />} />
        <Route path="/conf" element={<Confiance />} />
        <Route path="/genre" element={<Genre />} />
        <Route path="/isolement" element={<Isolement />} />



      </Routes>
      <ScrollToTopButton />
      <Footer />
    </Router>
    </ThemeProvider>
  );
}

export default App;
