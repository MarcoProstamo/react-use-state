export default function Tag({ index, tagName, handleTagClick, isActive }) {
  return (
    <>
      <button
        id={index}
        className={`tag ${isActive}`}
        onClick={handleTagClick.bind(this, index)}
      >
        {tagName}
      </button>
    </>
  );
}
