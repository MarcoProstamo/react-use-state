import TagList from "./Tag/TagList";
import data from "../Data/languages";

export default function Main() {
  const tagList = [];
  data.map((item) => {
    if (!tagList.includes(item)) tagList.push(item.title);
  });

  return (
    <main>
      <div className="container">
        <TagList tagList={tagList} />
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
