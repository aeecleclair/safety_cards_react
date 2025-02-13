import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Connaissance_soi from "./pages/Connaissance-soi/Connaissance-de-soi-main";
import Risques_addictifs from "./pages/Risques-addictifs/Risques-addictifs-main";
import Sante from "./pages/Sante/Sante-main";
import Sexe_amour from "./pages/Sexe-amour/Sexe-amour-main";
import Vie_courante from "./pages/Vie-courante/Vie-courante-main";
import Vie_groupe from "./pages/Vie-groupe/Vie-groupe-main";


function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Connaissance-de-soi-main" element={<Connaissance_soi />} /> /* Connaissance-de-soi est le lien url, décorrélé de l'arborescence de vscode */
        <Route path="/Risques-addictifs-main" element={<Risques_addictifs />} />
        <Route path="/Sante-main" element={<Sante />} />
        <Route path="/Sexe-amour-main" element={<Sexe_amour />} />
        <Route path="/Vie-courante-main" element={<Vie_courante />} />
        <Route path="/Vie-groupe-main" element={<Vie_groupe />} />

      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
