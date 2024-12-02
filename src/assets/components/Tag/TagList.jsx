import Tag from "./Tag";

export default function TagList({ tagList, handleTagClick, isActive }) {
  return (
    <section className="filtering-tags">
      {tagList.map((tag, index) => (
        <Tag
          key={index}
          index={index}
          tagName={tag}
          handleTagClick={handleTagClick}
          isActive={isActive}
        />
      ))}
    </section>
  );
}
