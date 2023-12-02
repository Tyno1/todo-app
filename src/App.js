import CreateTodo from "./CreateTodo";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Todos from "./Todos";
import TodoList from "./TodoList";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path='/' element={<Todos />} />
          <Route path='/create' element={<CreateTodo />} />
          <Route path='/todos/:id' element={<TodoList />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
