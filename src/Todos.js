import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";


const Todos = () => {
  const [title, setTitle] = useState(null);
  const navigate = useNavigate();
 

  const handleClick = (todoId) => {
    fetch(`http://localhost:8000/todoTitles/${todoId}`, {
      method: "DELETE"
    }).then(() => {
      navigate('/')
    });
  };

  useEffect(() => {
    fetch("http://localhost:8000/todoTitles")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTitle(data);
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
              <button onClick={() => handleClick(todoTitle.id)}>delete</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Todos;
