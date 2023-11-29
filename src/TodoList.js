import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const TodoList = () => {
  const [newItem, setNewItem] = useState("");
  const [todo, setTodo] = useState([]);
  const params = useParams();
  const todoId = params.id // Get the todoId from the URL

  const handleSubmit = (e) => {
    e.preventDefault();
    const todoList = {
      list: []
    }
    fetch(`http://localhost:8000/todoTitles/${todoId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todoList),
    }).then(() => {
      console.log("now run");
    });

    // setTodo((currentTodos) => {
    //   // CurrentTodos
    //   return [...currentTodos, { title: newItem, completed: false }];
    // });

    setNewItem("");
  };

  // const toggleTodo = (id, completed) => {
  //   console.log(completed);
  //   setTodo((currentTodos) => {
  //     return currentTodos.map((todoItem) => {
  //       if (todoItem.id === id) {
  //         return { ...todoItem, completed: !todo.completed };
  //       }
  //       return todo;
  //     });
  //   });
  // };

  useEffect(() => {
    // Fetch the specific todo based on the todoId
    fetch(`http://localhost:8000/todoTitles/${todoId}`)
      .then((res) => res.json())
      .then((data) => {
        setTodo(data);
        console.log(setTodo)
      });
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
          {
            todo.length === 0 ?
              <div>No results found</div>
              :
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
              ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
