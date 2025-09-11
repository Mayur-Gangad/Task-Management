import { keyMap, tagStyle } from "../../Constants/Constants";
import "./Tag.css";

const Tag = ({ tagName, selectedTag, selected }) => {
  const key = keyMap[tagName];
  return (
    <>
      <button
        type="button"
        className="tag"
        style={selected ? tagStyle[key] : {}}
        onClick={() => selectedTag(tagName)}
      >
        {tagName}
      </button>
    </>
  );
};

export default Tag;
