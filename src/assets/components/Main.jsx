export default function Main() {
  return (
    <main>
      <div className="container">
        <section className="filtering-tags">
          <button className="tag active">HTML</button>
          <button className="tag">CSS</button>
          <button className="tag">JS</button>
          <button className="tag">4</button>
        </section>
        <section className="card-container">
          <div className="card">
            <div className="card-title">Lorem, ipsum dolor.</div>
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Eligendi, magni odio. Quaerat unde earum dolorum laudantium.
              Magnam saepe id ducimus.
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
