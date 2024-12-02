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

  const [cardTitle, setCardTitle] = useState("Nessun Linguaggio Selezionato");
  const [cardDescription, setCardDescription] = useState("😢");
  const [tags, setTags] = useState([...tagList]);

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

    const updatedTags = tags.map((tag, i) => ({
      ...tag,
      status: i === index ? (tag.status === "active" ? "" : "active") : "",
    }));
    setTags(updatedTags);
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
