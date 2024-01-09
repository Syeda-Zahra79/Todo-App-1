import { useContext } from "react";

import TodoContext from "../contexts/TodoContext";

import "../styles/TodoList.css";

function TodoList({ title, strike }) {
  const { todos, setTodos, setTodo } = useContext(TodoContext);

  const handleEdit = () => {
    let todo = todos.filter((item) => item.title !== title);
    setTodos(todo);
    setTodo(title);
  };

  const handleRemove = () => {
    let todo = todos.filter((item) => item.title !== title);
    setTodos(todo);
  };

  const handleClick = () => {
    let list = [...todos];
    list.map((elem) => {
      if (elem.title == title) {
        elem.strike = !elem.strike;
      }
    });
    setTodos(list);
  };

  return (
    <div className="list-container">
      <div className="content">
        <div className="circle">
          <div className="inner-circle" onClick={handleClick}></div>
        </div>

        <p
          className="content-p"
          style={{ textDecoration: strike == true && "line-through" }}>
          {title}
        </p>
      </div>

      <div className="modify-icons">
        <img
          className="img"
          src="../assets/Group 1.png"
          alt="Edit"
          onClick={handleEdit}
          width={25}
          height={25}
        />

        <img
          className="img"
          src="../assets/Group 2.png"
          alt="Remove"
          onClick={handleRemove}
          width={25}
          height={25}
        />
      </div>
    </div>
  );
}

export default TodoList;
