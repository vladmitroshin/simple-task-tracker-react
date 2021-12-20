import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    onAdd({ text, day, time, reminder });

    setText("");
    setDay("");
    setTime("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="add-form__item">
        <label htmlFor="addTask">Task</label>
        <input
          type="text"
          placeholder="Add task"
          id="addTask"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
      </div>
      <div className="add-form__item">
        <label htmlFor="addDay">Day</label>
        <input
          type="text"
          placeholder="Add day"
          id="addDay"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          required
        />
      </div>
      <div className="add-form__item">
        <label htmlFor="addTime">Time</label>
        <input
          type="text"
          placeholder="Add time"
          id="addTime"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </div>
      <div className="add-form__item add-form__reminder">
        <label htmlFor="setReminder">Reminder</label>
        <input
          type="checkbox"
          id="setReminder"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input className="btn" type="submit" value="Save" />
    </form>
  );
};

export default AddTask;
