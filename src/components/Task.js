import { FaTimes } from "react-icons/fa";

const Task = ({ task }) => {
  return (
    <div className="task">
      <h3>
        {task.text} <FaTimes className="task__remove-task" />
      </h3>
      <p>
        {task.day}, {task.time}
      </p>
    </div>
  );
};

export default Task;
