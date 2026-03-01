import "./styles/Navbar.css";
import { useTemplate } from "../context/TemplateContext";

export default function Navbar({ restaurantName }) {
  const { mode, setMode } = useTemplate();

  const toggleMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <nav className="nav-mobile">
      <h2 className="nav-title">{restaurantName}</h2>

      <div className="nav-controls">
        <label className="switch">
          <input
            type="checkbox"
            checked={mode === "light"}
            onChange={toggleMode}
          />
          <span className="slider"></span>
        </label>
      </div>
    </nav>
  );
}