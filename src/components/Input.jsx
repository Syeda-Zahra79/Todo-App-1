import { useContext } from "react";

import TodoContext from "../contexts/TodoContext";

import "../styles/Input.css";

function Input() {
  const { setTodos, todo, setTodo } = useContext(TodoContext);
  return (
    <div className="containerInput">
      <input
        type="text"
        placeholder="Write todo here...."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        onClick={() => {
          setTodos((prev) => [
            ...prev,
            {
              title: todo,
              strike: false,
            },
          ]);
          setTodo("");
        }}>
        Add
      </button>
    </div>
  );
}

export default Input;
