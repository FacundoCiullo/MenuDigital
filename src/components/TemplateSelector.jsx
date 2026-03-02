import { useState } from "react";
import { useTemplate } from "../context/TemplateContext";
import "./styles/TemplateSelector.css"; // Importamos nuestro CSS

export default function TemplateSelector() {
  const { template, setTemplate } = useTemplate();
  const [open, setOpen] = useState(false);

  const templates = [
    { id: "restaurant", label: "Demo Restaurante" },
    { id: "pizzeria", label: "Demo Pizzeria" },
    { id: "burguer", label: "Demo Hamburgueria" },
    { id: "cafe", label: "Demo Cafetería" }
  ];

  const currentLabel =
    templates.find((t) => t.id === template)?.label || "Seleccionar";

  const handleSelect = (id) => {
    setTemplate(id);
    setOpen(false);
  };

  return (
    <div className="template-selector">
      <button
        className="selector-toggle"
        onClick={() => setOpen(!open)}
      >
        {currentLabel} <span className="arrow">{open ? "" : ""}</span>
      </button>

      {open && (
        <ul className="selector-menu">
          {templates.map((item) => (
            <li
              key={item.id}
              className={`selector-item ${template === item.id ? "active" : ""}`}
              onClick={() => handleSelect(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}