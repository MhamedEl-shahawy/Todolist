import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import {  useStore } from "store/store";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const { count, increment } = useStore();


  

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <TodoForm />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
      />
    </>
  );
}

export default TodoList;
