import { Link } from "react-router-dom";
import { useTodoContext } from "./contexts/todoContext";
import { useEffect, useState } from "react";
import TodoList from "./TodoList";

const Todos = () => {
  //   const { title, setTitle } = useTodoContext();
  const [title, setTitle] = useState(null);
  const handleclick = () => {
    console.log("you clicked");
  };

  useEffect(() => {
    fetch("http://localhost:8000/todoTitles")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTitle(data);
        console.log(title);
      });
  }, []);

  return (
    <div className="todos">
      <ul>
        {title?.map((todoTitle) => {
          return (
            <div key={todoTitle.id}>
              <Link to={`/todos/${todoTitle.id}`}>
                <li>{todoTitle.name}</li>
              </Link>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Todos;
