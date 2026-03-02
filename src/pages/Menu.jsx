import { useState, useMemo, useEffect } from "react";
import { useTemplate } from "../context/TemplateContext";

import SearchBar from "../components/SearchBar";
import FiltersBar from "../components/FiltersBar";
import ProductsGrid from "../components/ProductsGrid";

import { restaurantProducts } from "../data/restaurantProducts";
import { pizzeriaProducts } from "../data/pizzeriaProducts";
import { burguerProducts } from "../data/burguerProducts";
import { cafeProducts } from "../data/cafeProducts";

// Configuración de banners por template y categorías
const templateBanners = {
  restaurant: {
    banner: "/img/banner/banner-restaurant.png",
    categories: {
      "carnes": "/img/banners/banner-comidas.png",
      "ensaladas": "/img/banners/banner-ensaladas.png",
      "entradas": "/img/banners/banner-entradas.png",
      "bebidas": "/img/banners/banner-bebidas.png",
      "postres": "/img/banners/banner-postres.png",
    },
  },
  pizzeria: {
    banner: "/img/banner/banner-pizzeria.png",
    categories: {
      "pizzas": "/img/banners/banner-pizzas.png",
      "empanadas": "/img/banners/banner-empanadas.png",
      "bebidas": "/img/banners/banner-bebidas.png",
      "postres": "/img/banners/banner-postres.png",
    },
  },
  burguer: {
    banner: "/img/banner/banner-burguer.png",
    categories: {
      "Hamburguesas": "/img/banners/banner-hamburguesas.png",
      "Acompañamientos": "/img/banners/banner-acompañamientos.png",
      "Bebidas": "/img/banners/banner-bebidas.png",
    },
  },
  cafe: {
    banner: "/img/banner/banner-cafe.png",
    categories: {
      "cafeteria": "/img/banners/banner-cafeteria.png",
      "panificados": "/img/banners/banner-panificados.png",
      "pasteleria": "/img/banners/banner-pasteleria.png",
      "bebidas": "/img/banners/banner-bebidas.png",
    },
  },
};

// Devuelve los productos según el template seleccionado
const getProductsByTemplate = (template) => {
  switch (template) {
    case "pizzeria": return pizzeriaProducts;
    case "burguer":  return burguerProducts;
    case "cafe":     return cafeProducts;
    default:         return restaurantProducts;
  }
};

export default function Menu() {
  const { template } = useTemplate();
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  // Obtener productos según template
  const products = useMemo(() => getProductsByTemplate(template), [template]);

  // Resetear filtro al cambiar de template
  useEffect(() => setFilter("all"), [template]);

  // Filtrar productos por categoría y búsqueda
  const filteredProducts = useMemo(() => {
    return products.filter(item => {
      const matchCategory = filter === "all" || item.category === filter;
      const matchSearch   = item.name.toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [products, filter, search]);

  // Banners según template
  const currentTemplateBanners = templateBanners[template] || {};
  const bannerImg = currentTemplateBanners.banner || null;
  const categoryBanners = currentTemplateBanners.categories || {};

  return (
    <main>
      {/* Buscador */}
      <SearchBar search={search} setSearch={setSearch} />

      {/* Barra de filtros */}
      <FiltersBar
        current={filter}
        setFilter={setFilter}
        products={products}
        template={template}
      />

      {/* Grilla de productos con banners */}
      <ProductsGrid
        products={filteredProducts}
        bannerImg={bannerImg}
        categoryBanners={categoryBanners}
      />
    </main>
  );
}