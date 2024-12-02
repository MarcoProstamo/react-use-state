import Tag from "./Tag";

export default function TagList({ tags, handleTagClick }) {
  return (
    <section className="filtering-tags">
      {tags.map((tag, index) => (
        <Tag
          key={index}
          index={index}
          tagName={tag.title}
          tagStatus={tag.status}
          handleTagClick={handleTagClick}
        />
      ))}
    </section>
  );
}
