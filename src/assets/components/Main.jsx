import TagList from "./Tag/TagList";
import Card from "./Card";
import data from "../Data/languages";

export default function Main() {
  const tagList = [];
  data.map((item) => {
    if (!tagList.includes(item)) tagList.push(item.title);
  });

  const cardTitle = "Nessun Linguaggio Selezionato";
  const cardDescription = "😢";

  return (
    <main>
      <div className="container">
        <TagList tagList={tagList} />
        <Card title={cardTitle} description={cardDescription} />
      </div>
    </main>
  );
}
