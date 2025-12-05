import hero from "../assets/hero.png";

export default function ProductCard({ product }) {
  if (!product) return null;

  const formatPrice = (num) =>
    num?.toLocaleString("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0,
    });

  return (
    <div className="product-card">
      <div className="card-img">
      <img
        src={product.img || hero}
        alt={product.name || "Producto"}
      />
    </div>

      <div className="card-info">
        <h4>{product.name || "Sin nombre"}</h4>
        {product.price && (
          <p className="price">{formatPrice(product.price)}</p>
        )}
      </div>
    </div>
  );
}
