export default function Card({ title, description }) {
  return (
    <section className="card-container">
      <div className="card">
        <div className="card-title">{title}</div>
        <div>{description}</div>
      </div>
    </section>
  );
}
