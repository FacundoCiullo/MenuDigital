import "../styles/global.css";

export default function ServiceCard({ title, description }) {
  return (
    <div className="service-card glass-card">
      <div className="card-glow"></div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
