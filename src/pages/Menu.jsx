import { useState } from "react";
import productsData from "../data/products.json";
import SearchBar from "../components/SearchBar";
import FiltersBar from "../components/FiltersBar";
import ProductsGrid from "../components/ProductsGrid";

export default function Menu() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = productsData.filter(item => {
    const matchCategory = filter === "all" || item.category === filter;
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <main>
      <SearchBar search={search} setSearch={setSearch} />
      <FiltersBar current={filter} setFilter={setFilter} />
      <ProductsGrid products={filtered} />
    </main>
  );
}
