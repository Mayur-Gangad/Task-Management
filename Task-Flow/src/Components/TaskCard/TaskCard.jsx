import "./TaskCard.css";
import Tag from "../Tag/Tag";
import DeleteIcon from "../../assets/deleteIcon.png";

const TaskCard = ({
  title,
  tags,
  handleDelete,
  index,
  setActiveCard,
  onDropHandler,
}) => {
  return (
    <article
      className="card-data"
      draggable
      onDragStart={() => {
        setActiveCard(index);
      }}
      onDragEnd={() => {
        setActiveCard(null);
      }}
      onDrop={() => {
        onDropHandler;
      }}
    >
      <p className="card-text">{title}</p>
      <div className="card">
        <div className="tags">
          {tags.map((tag, idx) => (
            <Tag key={idx} tagName={tag} selected />
          ))}
        </div>
        <div className="task-delete" onClick={() => handleDelete(index)}>
          <img className="delete-icon" src={DeleteIcon} />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
