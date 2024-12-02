import { useState } from "react";
import TagList from "./Tag/TagList";
import Card from "./Card";
import data from "../Data/languages";

export default function Main() {
  const tagList = [];
  data.map((item) => {
    if (!tagList.includes(item)) tagList.push(item.title);
  });

  let [cardTitle, setCardTitle] = useState("Nessun Linguaggio Selezionato");
  let [cardDescription, setCardDescription] = useState("😢");
  let [isActive, setIsActive] = useState("");
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

    // ! TODO: FIX → Add Class to THIS Tag not ALL
    setIsActive(isActive !== `active` ? (isActive = `active`) : "");
  }

  return (
    <main>
      <div className="container">
        <TagList
          tagList={tagList}
          handleTagClick={handleTagClick}
          isActive={isActive}
        />
        <Card title={cardTitle} description={cardDescription} />
      </div>
    </main>
  );
}
