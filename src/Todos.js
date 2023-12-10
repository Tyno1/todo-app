import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import img1 from "./images/eden-constantino-iJg1YzsEfqo-unsplash.jpg";
import img2 from "./images/airfocus-v89zhr0iBFY-unsplash.jpg";
import img3 from "./images/luis-villasmil-mlVbMbxfWI4-unsplash.jpg";

const Todos = () => {
  const [title, setTitle] = useState(null);
  
  const fetchData = () => {
    fetch("http://localhost:8000/todoTitles")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTitle(data);
      });
  };

  const handleClick = (todoId) => {
    fetch(`http://localhost:8000/todoTitles/${todoId}`, {
      method: "DELETE",
    }).then(() => {
      fetchData();
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="todos">
      <div className="left-cont">
        <h2 className="title">Todo Titles</h2>
        <ul>
          {title?.map((todoTitle) => {
            return (
              <div key={todoTitle.id}>
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/todos/${todoTitle.id}`}
                >
                  <li>{todoTitle.name}</li>
                </Link>
                <button onClick={() => handleClick(todoTitle.id)}>
                  delete
                </button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="right-cont">
        <div className="first-img">
          <img src={img3} alt="" />
        </div>
        <div className="second-img">
          <img src={img1} alt="" />
        </div>
        <div className="third-img">
          <img src={img2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Todos;
