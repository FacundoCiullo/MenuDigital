import ProductCard from "./ProductCard";
import "./styles/ProductsGrid.css"; // CSS aparte para banners y grilla

export default function ProductsGrid({ products, bannerImg, categoryBanners }) {
  if (!Array.isArray(products)) return null;

  // Agrupar productos por categoría
  const grouped = products.reduce((acc, prod) => {
    if (!acc[prod.category]) acc[prod.category] = [];
    acc[prod.category].push(prod);
    return acc;
  }, {});

  return (
    <div className="products-grid-wrapper">
      {/* Banner general */}
      {bannerImg && (
        <div className="general-banner">
          <img src={bannerImg} alt="Banner general" />
        </div>
      )}

      <div className="products-grid">
        {Object.keys(grouped).map((category) => (
          <div key={category} className="category-block">
            {/* Banner de categoría */}
            {categoryBanners?.[category] && (
              <div className="category-banner">
                <img src={categoryBanners[category]} alt={`Banner ${category}`} />
                {/* Aquí se puede poner un título sobre el banner */}
                <div className="category-title-overlay">{category.toUpperCase()}</div>
              </div>
            )}

            {/* Título de categoría (por si no hay banner) */}
            {!categoryBanners?.[category] && (
              <h2 className="category-title">{category.toUpperCase()}</h2>
            )}

            <div className="category-products">
              {grouped[category].map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}