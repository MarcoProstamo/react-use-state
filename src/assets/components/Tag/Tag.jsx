export default function Tag({ index, tag, handleTagClick }) {
  return (
    <>
      <button
        className={`tag ${tag.status}`}
        onClick={() => handleTagClick(index)}
      >
        {tag.title}
      </button>
    </>
  );
}
