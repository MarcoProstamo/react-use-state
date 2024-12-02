import Tag from "./Tag";

export default function TagList({ tagList }) {
  return (
    <section className="filtering-tags">
      {tagList.map((tag, index) => (
        <Tag key={index} tagName={tag} />
      ))}
    </section>
  );
}
