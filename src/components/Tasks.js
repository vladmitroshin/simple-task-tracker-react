import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <main>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </main>
  );
};

export default Tasks;
