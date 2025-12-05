import "./FiltersBar.css";

const categories = [
  { id: "all", label: "Todo" },
  { id: "entradas", label: "Entradas" },
  { id: "pizzas", label: "Pizzas" },
  { id: "carnes", label: "Carnes" },
  { id: "vegan", label: "Vegan" },
  { id: "sin-tacc", label: "Sin TACC" },
  { id: "bebidas", label: "Bebidas" }
];

export default function FiltersBar({ current, setFilter }) {
  return (
    <div className="filters-scroll">
      {categories.map(cat => (
        <button
          key={cat.id}
          className={`filter-btn ${current === cat.id ? "active" : ""}`}
          onClick={() => setFilter(cat.id)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
