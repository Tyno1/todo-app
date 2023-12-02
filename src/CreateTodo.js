import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateTodo = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const todoData = { name, list: [] };
    setName("");
    fetch("http://localhost:8000/todoTitles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todoData),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => navigate(`/todos/${data.id}`));
  };

  return (
    <div className="create-todo">
      <form onSubmit={handleSubmit}>
        <label>Todo Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          type="text"
        ></input>
        <button>start</button>
      </form>
    </div>
  );
};

export default CreateTodo;
