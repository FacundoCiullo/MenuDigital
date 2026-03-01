import "./styles/FiltersBar.css";

export default function FiltersBar({
  current,
  setFilter,
  products,
  template,
  categoryConfig
}) {
  const config = categoryConfig?.[template];

  let categories = [];

  // Si hay configuración específica (como burguer)
  if (config?.order) {
    categories = ["all", ...config.order];
  } else {
    // Si no hay config, generamos desde productos
    categories = [
      "all",
      ...Array.from(new Set(products.map((p) => p.category)))
    ];
  }

  const getLabel = (cat) => {
    if (cat === "all") return "Todo";
    return config?.labels?.[cat] || cat;
  };

  return (
    <div className="filters-scroll">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`filter-btn ${current === cat ? "active" : ""}`}
          onClick={() => setFilter(cat)}
        >
          {getLabel(cat)}
        </button>
      ))}
    </div>
  );
}