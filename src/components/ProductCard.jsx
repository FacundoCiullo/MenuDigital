import { useState, useEffect } from "react";

export default function ProductCard({ product }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!product) return null;

  const formatPrice = (num) =>
    num?.toLocaleString("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0,
    });

  return (
    <>
      <div
        className="product-card"
        onClick={() => setIsOpen(true)}
      >
        <div className="card-img">
          <img
            src={product.img}
            alt={product.name || "Producto"}
          />
        </div>

        <div className="card-info">
          <div className="title-price-row">
            <h4>{product.name || "Sin nombre"}</h4>

            {product.price !== undefined && (
              <p className="price">
                {formatPrice(product.price)}
              </p>
            )}
          </div>

          {product.descripcion && (
            <p className="card-descripcion">
              {product.descripcion}
            </p>
          )}
        </div>
      </div>

      {isOpen && (
        <div
          className="modal-overlay"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>

            <img
              src={product.img}
              alt={product.name}
              className="modal-img"
            />

            <h2 className="modal-title">
              {product.name}
            </h2>

            {product.price !== undefined && (
              <p className="modal-price">
                {formatPrice(product.price)}
              </p>
            )}

            <p className="modal-description">
              {product.descripcion ||
                "Sin descripción disponible."}
            </p>
          </div>
        </div>
      )}
    </>
  );
}