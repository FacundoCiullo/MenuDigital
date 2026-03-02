import { useState, useMemo, useEffect } from "react";
import { useTemplate } from "../context/TemplateContext";

import SearchBar from "../components/SearchBar";
import FiltersBar from "../components/FiltersBar";
import ProductsGrid from "../components/ProductsGrid";

import { restaurantProducts } from "../data/restaurantProducts";
import { pizzeriaProducts } from "../data/pizzeriaProducts";
import { burguerProducts } from "../data/burguerProducts";
import { cafeProducts } from "../data/cafeProducts";

/**
 * Devuelve los productos según el template seleccionado
 */
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

export default function Menu() {
  const { template } = useTemplate();
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  // Obtiene los productos según el template seleccionado
  const products = useMemo(() => getProductsByTemplate(template), [template]);

  // Resetear filtro cuando cambia el template
  useEffect(() => {
    setFilter("all");
  }, [template]);

  // Filtra los productos por categoría y búsqueda
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchCategory = filter === "all" || item.category === filter;
      const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
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
      />

      <ProductsGrid products={filteredProducts} />
    </main>
  );
}