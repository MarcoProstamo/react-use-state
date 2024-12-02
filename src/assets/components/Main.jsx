import { useState } from "react";
import TagList from "./Tag/TagList";
import Card from "./Card";
import data from "../Data/languages";

export default function Main() {
  const tagList = [];
  data.map((item) => {
    if (!tagList.includes(item.title))
      tagList.push({ status: "", title: item.title });
  });

  let [cardTitle, setCardTitle] = useState("Nessun Linguaggio Selezionato");
  let [cardDescription, setCardDescription] = useState("😢");
  let [tags, setTags] = useState([...tagList]);

  function handleTagClick(index) {
    setCardTitle(
      cardTitle !== data[index].title
        ? data[index].title
        : "Nessun Linguaggio Selezionato"
    );
    setCardDescription(
      cardDescription !== data[index].description
        ? data[index].description
        : "😢"
    );

    setTags(
      tags[index].status !== `active`
        ? (tags[index].status = `active`)
        : (tags[index].status = "")
    );
  }

  return (
    <main>
      <div className="container">
        <TagList tags={tags} handleTagClick={handleTagClick} />
        <Card title={cardTitle} description={cardDescription} />
      </div>
    </main>
  );
}
