import { useState } from "react";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [currentTodo, setCurrentTodo] = useState("");

  const addTodo = () => {
    setTodoList((prevTodoList) => [...prevTodoList, currentTodo]);
    setCurrentTodo("");
  };
  return (
    <>
      <input
        placeholder="todo"
        onChange={(e) => setCurrentTodo(e.target.value)}
        value={currentTodo}
      />
      <btn onClick={addTodo}>Add to list</btn>
      <br />
      {todoList.map((todo) => (
        <li>{todo}</li>
      ))}
    </>
  );
};

export default Todo;
