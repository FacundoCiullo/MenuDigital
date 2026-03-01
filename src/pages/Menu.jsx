import { useState, useMemo, useEffect } from "react";
import { useTemplate } from "../context/TemplateContext";

import SearchBar from "../components/SearchBar";
import FiltersBar from "../components/FiltersBar";
import ProductsGrid from "../components/ProductsGrid";

import { restaurantProducts } from "../data/restaurantProducts";
import { pizzeriaProducts } from "../data/pizzeriaProducts";
import { burguerProducts } from "../data/burguerProducts";
import { cafeProducts } from "../data/cafeProducts";

const getProductsByTemplate = (template) => {
  switch (template) {
    case "pizzeria":
      return pizzeriaProducts;
    case "burguer":
      return burguerProducts;
    case "cafe":
      return cafeProducts;
    default:
      return restaurantProducts;
  }
};

// 🔥 CONFIGURACIÓN DE CATEGORÍAS POR RUBRO
const categoryConfig = {
  burguer: {
    order: ["Hamburguesas", "Acompañamientos", "Bebidas"],
    labels: {
      burgers: "Hamburguesas",
      sides: "Acompañamientos",
      drinks: "Bebidas"
    }
  }
};

export default function Menu() {
  const { template } = useTemplate();

  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const products = useMemo(() => {
    return getProductsByTemplate(template);
  }, [template]);

  // Resetear filtro cuando cambia el rubro
  useEffect(() => {
    setFilter("all");
  }, [template]);

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchCategory =
        filter === "all" || item.category === filter;

      const matchSearch =
        item.name.toLowerCase().includes(search.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [products, filter, search]);

  return (
    <main>
      <SearchBar search={search} setSearch={setSearch} />

      <FiltersBar
        current={filter}
        setFilter={setFilter}
        products={products}
        template={template}
        categoryConfig={categoryConfig}
      />

      <ProductsGrid products={filteredProducts} />
    </main>
  );
}