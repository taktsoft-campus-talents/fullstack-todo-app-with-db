import "./Todo.css";

export default function Todo({ todo, onToggleDone }) {
  return (
    <div className="todo-container">
      <p>{todo.task}</p>
      <div className="checkbox-group">
        <label>
          Erledigt
          <input
            type="checkbox"
            checked={todo.isDone}
            onChange={(e) => {
              onToggleDone(e.target.checked);
            }}
          />
        </label>
      </div>
    </div>
  );
}
