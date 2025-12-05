import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";
import Navbar from "./components/Navbar";
import "./styles/main.css";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/promos" element={<h1>Promos</h1>} />
          <Route path="/ubicacion" element={<h1>Ubicación</h1>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;