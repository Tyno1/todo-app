import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const TodoList = () => {
  const [newItem, setNewItem] = useState("");
  const [todo, setTodo] = useState([]);
  const params = useParams();
  const todoId = params.id; // Get the todoId from the URL

  const getTodo = () => {
    fetch(`http://localhost:8000/todoTitles/${todoId}`)
      .then((res) => res.json())
      .then((data) => {
        setTodo(data);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const todoList = {
      task: newItem,
      id: todo.list.length + 1
    };

    fetch(`http://localhost:8000/todoTitles/${todoId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...todo, list: [...todo.list, todoList] }),
    }).then(() => {
      getTodo();
    });

    setNewItem("");
  };

  useEffect(() => {
    getTodo();
  }, [todoId]);

  if (!todo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="todo-list">
      <div className="add-todo">
        <form onSubmit={handleSubmit}>
          <label htmlFor="item">New item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            required
            id="item"
          />
          <button className="buttn">Add</button>
        </form>
      </div>
      <h2 className="title">{todo.name}</h2>
      <div className="list">
        <ul>
          {todo.length === 0 ? (
            <div>No results found</div>
          ) : (
            todo?.list?.map((task) => (
              <li key={task.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    // onChange={(e) => toggleTodo(todo.id, e.target.value)}
                  />
                  {task.task} ({todo.completed})
                </label>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
