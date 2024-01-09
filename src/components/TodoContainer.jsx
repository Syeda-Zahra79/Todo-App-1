import { useContext } from "react";

import TodoList from "./TodoList";
import TodoContext from "../contexts/TodoContext";

import "../styles/TodoContainer.css";

function TodoContainer() {
  const { todos } = useContext(TodoContext);
  
  return (
    <>
      {todos.length > 0 && (
        <div className="container">
          {todos.map((todo) => {
            return <TodoList title={todo.title} strike={todo.strike} />;
          })}
        </div>
      )}
    </>
  );
}

export default TodoContainer;
