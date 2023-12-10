import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import img1 from "./images/eden-constantino-iJg1YzsEfqo-unsplash.jpg"
import img2 from "./images/airfocus-v89zhr0iBFY-unsplash.jpg"
import img3 from "./images/luis-villasmil-mlVbMbxfWI4-unsplash.jpg"


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
      id: todo.list.length + 1,
    };
    // const handleDelete = () => {
    //   const handleClick = (todoId) => {
    //     fetch(`http://localhost:8000/todoTitles/${todoId}`, {
    //       method: "DELETE",
    //     }).then(() => {
          
    //     });
    //   };
    // }

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
      <div className="left-cont">
        <div className="add-todo">
          <form onSubmit={handleSubmit}>
            <label htmlFor="item">New item</label>
            <input
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              type="text"
              required
              placeholder="input your tasks here..."
              id="item"
            />
            <button className="buttn">Add Task</button>
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
                    <input type="checkbox" checked={todo.completed} />
                    {task.task} {todo.completed}
                  </label>
                  {/* <button onClick={handleDelete}>delete</button> */}
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
      <div className="right-cont">
        <div className="first-img">
          <img src={img1} alt="" />
        </div>
        <div className="second-img">
          <img src={img2} alt="" />
        </div>
        <div className="third-img">
          <img src={img3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TodoList;
