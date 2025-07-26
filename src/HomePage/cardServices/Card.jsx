import "./card.css"; // External CSS

function Card({ image, title, tagline }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h2>{title}</h2>
      <p>{tagline}</p>
    </div>
  );
}

export default Card;
