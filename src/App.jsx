import { Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TemplateSelector from "./components/TemplateSelector";
import { config } from "./config";
import "./styles/main.css";
import "./components/styles/theme.css";

function App() {
  return (
    <>
      <TemplateSelector />
      <Navbar restaurantName={config.restaurantName} />

      <main>
        <Routes>
          <Route path="/" element={<Menu />} />
          {config.showPromos && (
            <Route path="/promos" element={<h1>Promos</h1>} />
          )}
          {config.showLocation && (
            <Route path="/ubicacion" element={<h1>Ubicación</h1>} />
          )}
        </Routes>
      </main>

      <Footer
        restaurantName={config.restaurantName}
        whatsappNumber={config.whatsappNumber}
      />
    </>
  );
}

export default App;