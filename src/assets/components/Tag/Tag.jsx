export default function Tag({ index, tagName, tagStatus, handleTagClick }) {
  return (
    <>
      <button
        className={`tag ${tagStatus}`}
        onClick={handleTagClick.bind(this, index)}
      >
        {tagName}
      </button>
    </>
  );
}
