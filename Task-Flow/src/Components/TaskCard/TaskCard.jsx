import "./TaskCard.css";
import Tag from "../Tag/Tag";
import DeleteIcon from "../../assets/deleteIcon.png";

const TaskCard = () => {
  return (
    <article className="card-data">
      <p className="card-text">This is a sample text</p>
      <div className="card">
        <div className="tags">
          <Tag tagName="Dev" />
          <Tag tagName="QA" />
        </div>
        <div className="task-delete">
          <img className="delete-icon" src={DeleteIcon} />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
