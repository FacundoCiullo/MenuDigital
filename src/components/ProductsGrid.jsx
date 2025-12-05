import ProductCard from "./ProductCard";

export default function ProductsGrid({ products }) {
  if (!Array.isArray(products)) return null;

  // Agrupar productos por categoría
  const grouped = products.reduce((acc, prod) => {
    if (!acc[prod.category]) acc[prod.category] = [];
    acc[prod.category].push(prod);
    return acc;
  }, {});

  return (
    <div className="products-grid">
      {Object.keys(grouped).map((category) => (
        <div key={category} className="category-block">
          <h2 className="category-title">{category.toUpperCase()}</h2>

          <div className="category-products">
            {grouped[category].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}