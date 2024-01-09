import Header from "./components/Header";
import "./App.css";
import Input from "./components/Input";
import TodoContainer from "./components/TodoContainer";
import TodoContext from "./contexts/TodoContext";
import { useEffect, useState } from "react";
function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo ] = useState('');
  

  useEffect(() => {
    alert('Click the inner circle of ant todo to mark it as completed!')
  }, [])

  return (
    <>
      <div>
        <TodoContext.Provider value={{ todos,todo, setTodos,  setTodo }}>
          <Header />
          <Input />
          <TodoContainer />
        </TodoContext.Provider>
      </div>
    </>
  );
}

export default App;
