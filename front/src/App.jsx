import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Connaissance_soi from "./pages/Connaissance-soi/Connaissance-de-soi-main";
import Risques_addictifs from "./pages/Risques-addictifs/Risques-addictifs-main";
import Sexe_amour from "./pages/Sexe-amour/Sexe-amour-main";

import Vie_groupe from "./pages/Vie-groupe/Vie-groupe-main";

//Vie courante
import Vie_courante from "./pages/Vie-courante/Vie-courante-main";
import Accidents_circu from "./pages/Vie-courante/Accidents-circu";
import Alimentation from "./pages/Vie-courante/Alimentation";
import Anxiete from "./pages/Vie-courante/Anxiete";
import Demarches_eco from "./pages/Vie-courante/Demarches-eco";
import Detente_relax from "./pages/Vie-courante/Detente-relax";
import Precarite_eco from "./pages/Vie-courante/Precarite-eco";
import Precarite_mens from "./pages/Vie-courante/Precarite-mens";
import Risques_incendies from "./pages/Vie-courante/Risque-incendies";
import Sante_physique from "./pages/Vie-courante/Sante-physique";
import Sedentarite from "./pages/Vie-courante/Sedentarite";

//Santé
import Sante from "./pages/Sante/Sante-main";
import Automutilation from "./pages/Sante/Automutilation";
import Depression from "./pages/Sante/Depression";
import Deracinement from "./pages/Sante/Deracinement";
import Endometriose from "./pages/Sante/Endometriose";
import Handicap from "./pages/Sante/Handicap";
import Sommeil from "./pages/Sante/Sommeil";
import Suicide from "./pages/Sante/Suicide";
import Tca from "./pages/Sante/Tca"


function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Connaissance-de-soi-main" element={<Connaissance_soi />} /> /* Connaissance-de-soi est le lien url, décorrélé de l'arborescence de vscode */
        <Route path="/Risques-addictifs-main" element={<Risques_addictifs />} />
        <Route path="/Sexe-amour-main" element={<Sexe_amour />} />
        <Route path="/Vie-groupe-main" element={<Vie_groupe />} />

        //Vie courante
        <Route path="/Vie-courante-main" element={<Vie_courante />} />
        <Route path="/accident" element={<Accidents_circu />} />
        <Route path="/aliment" element={<Alimentation />} />
        <Route path="/anxiete" element={<Anxiete />} />
        <Route path="/ecolo" element={<Demarches_eco />} />
        <Route path="/detente" element={<Detente_relax />} />
        <Route path="/prec_eco" element={<Precarite_eco />} />
        <Route path="/prec_mens" element={<Precarite_mens />} />
        <Route path="/incendie" element={<Risques_incendies />} />
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


      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
