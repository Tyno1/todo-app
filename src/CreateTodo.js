import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Image1 from "./images/mindspace-studio-iF8GB3WCEls-unsplash.jpg";

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
      <div className="imageSection">
        <img src={Image1} alt="" />
      </div>
      <div className="form-section">
        <form onSubmit={handleSubmit}>
          <label>Todo Titile</label>
          <p style={{fontSize: 12}}>Give this session a name before you start inputung tasks</p>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            type="text"
          ></input>
          <div>
            <button>start</button>
          </div>
        </form>
        <div className="footer">
          <p>Do you often feel overwhelmed by the amount of work you have to do? Do you find yourself missing deadlines? Or do you sometimes just forget to do something important, so that people have to chase you to get work done?</p>
          <p>All of these are symptoms of not keeping a proper "To-Do List." These are prioritized lists of all the tasks that you need to carry out. They list everything that you have to do, with the most important tasks at the top of the list, and the least important tasks at the bottom.</p>
        </div>
      </div>
    </div>
  );
};

export default CreateTodo;
